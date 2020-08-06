import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpUtil } from '../../shared/utils/http.util';
import { SharedService } from '../../shared/services/shared.service';
import { GLOBAL_CONSTANTS } from '../../constants/global-contant';
import { User } from '../interfaces/cxbot-tmpl-interf';

// TODO refactor code
@Injectable()
export class EnvironmentService {
    public appConfig;

    constructor (private httpClient: HttpClient,
                 private sharedService: SharedService,
                 ) { }

    getBFFEndpoint() {
        const { protocol, origin, host, pathname } = window.location;
        let endpointUrl = '';

        console.log('[getBFFEndpoint] this')
        console.log(this)

        if (typeof origin === 'undefined') {
            console.log('[getBFFEndpoint] typeof origin === \'undefined\'')

            if (host.includes('cf-mgmt-portal-fe')) {
                console.log('[getBFFEndpoint] includes');
                endpointUrl = protocol + pathname + pathname + host.replace('cf-mgmt-portal-fe','cf-mgmt-portal-bff');
            } else {
                console.log('[getBFFEndpoint] NOT include');
                endpointUrl = (
                    pathname.includes('-d0') ?
                        'https://cf-mgmt-portal-bff-chat-d0.osc1.ct3.cathaypacific.com' :
                    pathname.includes('-t0') ?
                        'https://cf-mgmt-portal-bff-chat-t0.osc1.ct3.cathaypacific.com' :
                        'https://cf-mgmt-portal-bff-chat-p0.osc1.cp3.cathaypacific.com'
                );
            }
        } else {
            console.log('[getBFFEndpoint] typeof origin !== \'undefined\'')

            if (host.includes('cf-mgmt-portal-fe')) {
                console.log('[getBFFEndpoint] includes');
                endpointUrl = origin.replace('cf-mgmt-portal-fe','cf-mgmt-portal-bff');
            } else {
                console.log('[getBFFEndpoint] NOT include');
                endpointUrl = (
                    pathname.includes('-d0') ?
                        'https://cf-mgmt-portal-bff-chat-d0.osc1.ct3.cathaypacific.com' :
                    pathname.includes('-t0') ?
                        'https://cf-mgmt-portal-bff-chat-t0.osc1.ct3.cathaypacific.com' :
                        'https://cf-mgmt-portal-bff-chat-p0.osc1.cp3.cathaypacific.com'
                );
            }
        }

        return endpointUrl;
    }

    loadAppConfig() {
        if (window.location.hostname==='localhost' || window.location.hostname==='127.0.0.1') {
            console.log('[loadAppConfig] localhost => loading environment')
            this.appConfig = environment;
            this.sessionUserInfoInit();
            return Promise.resolve();
        }
        return this.httpClient.get('cxbot-templ-ui/config')
            .toPromise()
            .then(data => {
                console.log('[loadAppConfig] After calling configUrl');
                console.log(data);
                this.updateConfig(data);
                this.resetInternalEndpoints();
                this.sessionUserInfoInit();
            })
            .catch((e) => {
            console.error('Error loading app config api, using environment file instead', e);
            this.appConfig = environment;
            this.resetInternalEndpoints();
            this.sessionUserInfoInit();
        });
    }

    private resetInternalEndpoints() {
        if (window.location.hostname.includes('osc1-internal')
            && !this.appConfig.API_URL_MGMT_PORTAL_BFF.includes('osc1-internal')) {
            console.log('reset internal endpoint...');
            console.log('Before: ' + this.appConfig.API_URL_MGMT_PORTAL_BFF);
            this.appConfig.API_URL_MGMT_PORTAL_BFF =
                this.appConfig.API_URL_MGMT_PORTAL_BFF.replace('osc1', 'osc1-internal');
            console.log('After: ' + this.appConfig.API_URL_MGMT_PORTAL_BFF);
        }
    }

    private sessionUserInfoInit() {
        if (this.appConfig.PRE_AUTH) {
            const parse: User = JSON.parse(this.appConfig.PRE_AUTH);
            this.sharedService.setBehaviorSubject(GLOBAL_CONSTANTS.USER_INFO_SESSION_KEY, parse);
        } else {
            const authUsername: String = HttpUtil.getCookieVal('auth_username');
            this.sharedService.setBehaviorSubject(GLOBAL_CONSTANTS.USER_INFO_SESSION_KEY, undefined);
            if (!authUsername) {
                const user: User = <User>{
                    username: authUsername
                };
                this.sharedService.setSession(GLOBAL_CONSTANTS.USER_INFO_SESSION_KEY, user);
                this.sharedService.setBehaviorSubject(GLOBAL_CONSTANTS.USER_INFO_SESSION_KEY, user);
            }
        }
    }

    get config() {
        return this.appConfig;
    }

    getCfSamlEndpoint() {
        return 'https://cf-saml-chat-d0.osc1.ct3.cathaypacific.com/cf-saml'
    }

    updateConfig(data) {
        const config = {
            PRODUCTION: data.PRODUCTION === 'true',
            DEBUG_MODE: data.DEBUG_MODE === 'true',
            LOGGER_LEVEL: parseInt(data.LOGGER_LEVEL),
            REPORT_SEARCH_DATE_RANGER: parseInt(data.REPORT_SEARCH_DATE_RANGER),
            API_URL_MGMT_PORTAL_BFF: data.API_URL_MGMT_PORTAL_BFF,
            PRE_AUTH: data.PRE_AUTH,
            HISTORY_RSA_PRIVATE_KEY: data.HISTORY_RSA_PRIVATE_KEY,
            IS_SAML_ENABLED: data.IS_SAML_ENABLED === 'true',
            API_URL_CF_SAML_LOGIN: data.API_URL_CF_SAML_LOGIN,
            TEMPLATE_LANGUAGES: data.TEMPLATE_LANGUAGES,
            DEFAULT_LANGUAGE: data.DEFAULT_LANGUAGE
        };
        this.appConfig = config;
        console.log('setting config', this.appConfig);
    }
}
