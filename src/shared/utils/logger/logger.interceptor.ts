import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { storage } from '../media/media.handle';
import { diskStorage } from 'multer';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    return next.handle().pipe(
      tap(() => {
        if (request.file) {
          // El archivo se ha subido correctamente, puedes hacer lo que quieras aquí
          console.log('interceptor: ', request.file);
        }
      }),
    );
  }

}
