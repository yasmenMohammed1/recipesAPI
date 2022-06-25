import express from 'express';
import { IMiddleware } from './interfaces/middleware.interface';
import { ICustomRouter } from './interfaces/router.interface';
import { ErrorHandlerMiddleware } from './middleware/errorHandler.middleware';
import 'dotenv/config';
import './core/Database/connection';
import ejs from 'ejs';
export class Server {
  private readonly _server = express();
  constructor() {
    this._server.engine('html', require('ejs').renderFile);

    this._server.set('view engine', 'html');

    this._server.use(express.static('uploads'));
  }
  middleware(mw: IMiddleware) {
    this._server.use(mw.getMiddleware());
  }
  errorMiddleware(errMiddleware: ErrorHandlerMiddleware) {
    this._server.use(errMiddleware.getErrorMidlleware());
  }
  route(router: ICustomRouter) {
    this._server.use(router.getRouter());
  }
  listen(PORT: number) {
    this._server.listen(PORT, () => {
      console.log('server is running in port ' + PORT);
    });
  }
}
