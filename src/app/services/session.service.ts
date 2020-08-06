import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseService} from '@shared/services/base.service';
import {HttpClient} from '@angular/common/http';
import {LoggerService} from '@shared/services/logger.service';
import {EnvironmentService} from './environment.service';
import {SharedService} from '@shared/services/shared.service';
import {HttpUtil} from '@s-utils/http.util';

@Injectable()
export class SessionService extends BaseService {

    private static URL_GETUSERLIST = 'wechat-chatbot/api/wechat/getUserList/';
  private static URL_GETDIALOGBYOPENID = 'wechat-chatbot/api/wechat/getWechatMsgByOpenId/';

    constructor(protected httpClient: HttpClient,
                protected environmentService: EnvironmentService,
                protected loggerService: LoggerService,
                protected sharedService: SharedService) {
        super(httpClient, environmentService.config.API_URL_MGMT_PORTAL_BFF, loggerService);
    }

  getDialogByOpenId(params): Observable<any> {
    return this.postRequest(SessionService.URL_GETDIALOGBYOPENID, params);
  }

  getUserList(params): Observable<any> {
    return this.postRequest(SessionService.URL_GETUSERLIST, params);
  }

}
