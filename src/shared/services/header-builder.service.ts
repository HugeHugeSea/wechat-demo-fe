import {HttpHeaders} from '@angular/common/http';
import { v4 as uuid } from 'uuid';

export class HeaderBuilder {

    private httpHeader = new HttpHeaders();

    private constructor() {
    }

    static create(): HeaderBuilder {
        return new HeaderBuilder();
    }

    json(): HeaderBuilder {
        return this.setHeader('Content-Type', 'application/json');
    }

    httpBasicAuth(userName: string, pwd: string): HeaderBuilder {
        const authToken = 'Basic ' + btoa(userName + ':' + pwd);
        return this.setHeader('Authorization', authToken);
    }

    httpBasicAuthD(authToken: string): HeaderBuilder {
        return this.setHeader('Authorization', authToken);
    }

    build(): HttpHeaders {
        return this.httpHeader;
    }

    addTraceID(): HeaderBuilder {
        return this.setHeader('trace_id', uuid());
    }

    public setHeader(key: string, val: string): HeaderBuilder {
        this.httpHeader = this.httpHeader.append(key, val);
        return this;
    }

}
