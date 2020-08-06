import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
import {LoggerService} from '@shared/services/logger.service';
import {HeaderBuilder} from '@shared/services/header-builder.service';

export class BaseService {

    // TODO error handling
    // TODO https://angular.io/tutorial/toh-pt6
    constructor(protected http: HttpClient,
                protected apiEndpoint: string,
                protected loggerService: LoggerService) {
    }

    getRequest<T>(endPoint: string, options?, config?): Observable<any> {
        this.apiEndpoint = config && config.apiHostname ?
            config.apiHostname :
            this.apiEndpoint;
        const url = this.getApiUrl(endPoint);
        this.loggerService.info('BaseService getRequest', {url, options});
        return this.http.get<T>(url, this.getOptions(options));
    }

    putRequest(endPoint: string, params: any, options?, config?): Observable<any> {
        this.apiEndpoint = config && config.apiHostname ?
            config.apiHostname :
            this.apiEndpoint;
        const url = this.getApiUrl(endPoint);
        this.loggerService.info('BaseService putRequest', {url, params, options});
        return this.http.put(url, params, this.getOptions(options));
    }

    postRequest(endPoint: string, params: any, options?, config?): Observable<any> {
        this.apiEndpoint = config && config.apiHostname ?
            config.apiHostname :
            this.apiEndpoint;
        const url = this.getApiUrl(endPoint);
        this.loggerService.info('BaseService postRequest', {url, params, options});
        return this.http.post(url, params, this.getOptions(options));
    }

    patchRequest(endPoint: string, params: any, options?, config?): Observable<any> {
        this.apiEndpoint = config && config.apiHostname ?
            config.apiHostname :
            this.apiEndpoint;
        const url = this.getApiUrl(endPoint);
        this.loggerService.info('BaseService patchRequest', {url, params, options});
        return this.http.patch(url, params, this.getOptions(options));
    }

    deleteRequest(endPoint: string, options?, config?): Observable<any> {
        this.apiEndpoint = config && config.apiHostname ?
            config.apiHostname :
            this.apiEndpoint;
        const url = this.getApiUrl(endPoint);
        this.loggerService.info('BaseService deleteRequest', url);
        return this.http.delete(url, this.getOptions(options));
    }

    protected getApiUrl(endPoint?) {
        return endPoint ? this.apiEndpoint + '/' + endPoint : this.apiEndpoint;
    }

    protected getOptions(options?): any {
        let _option: HttpOptions = {
            headers: this.getHeader(),
            responseType: 'json',
            withCredentials: true
        };
        if (options) {
            _option = Object.assign(_option, _.clone(options));
            _option.headers = options.headers || this.getHeader();
        }
        return _option;
    }

    protected getHeader(): HttpHeaders {
        return HeaderBuilder.create().json().addTraceID().build();
    }

}

interface HttpOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'json';
    withCredentials?: boolean;
}

