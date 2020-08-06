/**
 * if logger level is lower then the env. level
 * then it will not run the print the log
 */
export const enum LoggerLevel {
  All = 0,
  Trace = 10,
  Debug = 20,
  Info = 30,
  Warn = 40,
  Error = 50,
}
