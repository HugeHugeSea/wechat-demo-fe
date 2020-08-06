import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { LoggerLevel } from '@s-enums/logger-level.enum';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {
    this.level = environment.LOGGER_LEVEL;
  }

  private _level: LoggerLevel = LoggerLevel.Warn;

  get level(): LoggerLevel {
    return this._level;
  }

  set level(value: LoggerLevel) {
    this._level = value;
  }

  warn(...param): void {

    this._print(LoggerLevel.Warn, arguments);
  }

  debug(...param): void {

    this._print(LoggerLevel.Debug, arguments);
  }

  trace(...param): void {

    this._print(LoggerLevel.Trace, arguments);
  }

  info(...param): void {

    this._print(LoggerLevel.Info, arguments);
  }

  error(...param): void {

    this._print(LoggerLevel.Error, arguments);
  }


  /**
   * if logger level is lower then the env. level
   * then it will not run the print the log
   * @param curLv current log level
   * @param args log args
   * @private
   */
  private _print(curLv, args): void {

    let type = console.log;

    if (this._level > curLv || typeof console === 'undefined') {
      return null;
    }

    switch (curLv) {
      case LoggerLevel.Warn:
        type = console.warn;
        break;
      case LoggerLevel.Debug:
        type = console.debug;
        break;
      case LoggerLevel.Trace:
        type = console.trace;
        break;
      case LoggerLevel.Error:
        type = console.error;
        break;
      case LoggerLevel.Info:
      default:
        type = console.log;
        break;
    }

    Function.prototype.bind.call(type, console).apply(console, args);
  }
}
