import { ErrorRequestHandler } from "express";
import { IErrorMiddleware } from "../interfaces/errorHandler.interface";
export class ErrorHandlerMiddleware implements IErrorMiddleware {
  getErrorMidlleware(): ErrorRequestHandler {
    return (err: any, req: any, res: any, next: any) => {
      const status: number = err.status || 500;
      res.status(status).json({ Error: err + "" });
    };
  }
}
