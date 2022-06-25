import { Server } from './customServer';
import { BodyParserMiddleware } from './middleware/bodyparser.middleware';
import { ErrorHandlerMiddleware } from './middleware/errorHandler.middleware';
import { MorganMiddleware } from './middleware/morgan.middleware';
import { CorsMiddleware } from './middleware/cors.Middleware';
const app = new Server();
import { UserRouter } from './routers/User.routers';
import { RecipeRouter } from './routers/Recipets.routers';
import { CategoryRouter } from './routers/Category.router';
import { MulterMiddleware } from './middleware/multer.middleware';
const port = parseInt(process.env.PORT as string);
app.listen(port || 8000);
app.middleware(new CorsMiddleware());
app.middleware(new MulterMiddleware());
app.middleware(new BodyParserMiddleware());
app.middleware(new MorganMiddleware());
app.route(new CategoryRouter());
app.route(new UserRouter());
app.route(new RecipeRouter());
app.errorMiddleware(new ErrorHandlerMiddleware());