import { ErrorRequestHandler } from "express";
export interface IErrorMiddleware {
  getErrorMidlleware(): ErrorRequestHandler;
}
