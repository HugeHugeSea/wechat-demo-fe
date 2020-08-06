import {HttpHeaders, HttpParams} from '@angular/common/http';
import {HttpParamsInt} from '@int/http-params-map';
import * as moment from 'moment';
import * as _ from 'lodash';

export interface DateFilter {
    field: string;
    dateFormat: string;
}

export class HttpUtil {

    // TODO refactor
    static setGetParams(dataSet: HttpParamsInt[] | HttpParamsInt): HttpParams {

        if (!Array.isArray(dataSet)) {
            return this.setGetParam(dataSet);
        }

        const _httpParams = new HttpParams();
        dataSet.map(data => {
            _httpParams.set(data.key, data.value);
        });

        return _httpParams;
    }

    static setGetParam(data: HttpParamsInt): HttpParams {
        return new HttpParams().set(data.key, data.value);
    }

    static setParams(data: any): HttpParams {
        return new HttpParams(data);
    }

    static setHeader(): HttpHeaders {
        //  TODO add the header function
        return null;
    }

    /**
     * filter the exist value to a parameters object
     * including convert the date object to date string
     * @param {string} type
     * @param data
     * @param {DateFilter[]} dateFilterObject
     * @returns {any}
     */
    static filterParams(type: string, data: any, dateFilterObject?: DateFilter[]): any {
        let param = {};
        let params = {};
        if (!_.isNil(data)) {
            param = this.castParam(data, dateFilterObject);
            //  if it is get then wrap the fromObject
            params = type.toLowerCase() === 'get' ? {fromObject: param} : param;
        }

        return params;
    }

    /**
     * remove all the null/undefined/'' and cast all the date string to date object
     * @param data
     * @param {DateFilter[]} dateFilterObject
     * @returns {any}
     */
    static castParam(data: any, dateFilterObject?: DateFilter[]): any {
        const param = {};
        for (const field of Object.keys(data)) {

            if (!_.isNil(data[field]) && data[field] !== '') {
                let dateCondition = null;

                if (!_.isNil(dateFilterObject) && data[field] !== '') {
                    dateCondition = dateFilterObject.find(dateFilter => {
                        return dateFilter.field === field;
                    });
                }

                param[field] = dateCondition ? moment(data[field]).format(dateCondition.dateFormat).toString() : data[field];
            }
        }
        return param;
    }

    /**
     * filter get param
     * @param data
     * @param dateFilterObject
     * @returns {any}
     */
    static filterGetParams(data: any, dateFilterObject?): any {
        return this.filterParams('get', data, dateFilterObject);
    }

    /**
     * filter post param
     * @param data
     * @param dateFilterObject
     * @returns {any}
     */
    static filterPostParams(data: any, dateFilterObject?): any {
        return this.filterParams('post', data, dateFilterObject);
    }

    static getCookieVal(cookieName: string): string {

        const allCookies = document.cookie;
        let cookiePos = allCookies.indexOf(cookieName);
        let value = null;
        if (cookiePos !== -1) {
            cookiePos += cookieName.length + 1;
            let cookieEnd = allCookies.indexOf(';', cookiePos);
            if (cookieEnd === -1) {
                cookieEnd = allCookies.length;
            }
            value = allCookies.substring(cookiePos, cookieEnd);
        }
        if (value != null) {
            return decodeURIComponent(value);
        }
        return value;
    }
}
