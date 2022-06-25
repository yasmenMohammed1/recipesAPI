import { IMiddleware } from 'interfaces/middleware.interface';
import multer from 'multer';
import path from 'path';

export class MulterMiddleware implements IMiddleware {
  getMiddleware(): any {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../uploads'));
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      }
    });

    const uploader = multer({ storage });
    return uploader.single('file');
  }
}
