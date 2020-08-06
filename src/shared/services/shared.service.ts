import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
    private _subject: Map<string, Subject<any>>;
    private _behaviorSubject: Map<string, BehaviorSubject<any>>;

    constructor() {
        this._subject = new Map<string, Subject<any>>();
        this._behaviorSubject = new Map<string, BehaviorSubject<any>>();
    }

    getSession(name: string) {
        return JSON.parse(sessionStorage.getItem(name));
    }

    setSession(name: string, value: any) {
        sessionStorage.setItem(name, JSON.stringify(value));
    }

    removeSession(name: string) {
        sessionStorage.removeItem(name);
    }

    setSubject(key: string) {
        this._subject.set(key, new Subject<any>());
    }

    getSubject(key: string) {
        return this._subject.get(key) || null;
    }

    setBehaviorSubject(key: string, value: any) {
        this._behaviorSubject.set(key, new BehaviorSubject<any>(value));
    }

    removeBehaviorSubject(key: string) {
        this._behaviorSubject.delete(key);
    }

    getBehaviorSubject(key: string): BehaviorSubject<any> {
        return this._behaviorSubject.get(key) || null;
    }

    behaviorSubject(key): BehaviorSubject<any> {
        if (!this.getBehaviorSubject(key)) {
            this.setBehaviorSubject(key, null);
        }
        return this.getBehaviorSubject(key);
    }

    subject(key) {
        if (!this.getSubject(key)) {
            this.setSubject(key);
        }
        return this.getSubject(key);
    }

    getPreLogin() {
        return this.getBehaviorSubject('preLogin');
    }
}
