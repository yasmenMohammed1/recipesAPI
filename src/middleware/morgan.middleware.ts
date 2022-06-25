import morgan from 'morgan';
import { IMiddleware } from '../interfaces/middleware.interface';
export class MorganMiddleware implements IMiddleware {
  getMiddleware(): any {
    return morgan('dev');
  }
}
