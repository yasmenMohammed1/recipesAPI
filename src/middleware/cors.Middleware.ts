import cors from "cors";
import { IMiddleware } from "../interfaces/middleware.interface";
export class CorsMiddleware implements IMiddleware {
  getMiddleware(): any {
    return cors();
  }
}
