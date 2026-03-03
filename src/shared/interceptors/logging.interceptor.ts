import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = context.switchToHttp().getRequest();

    console.log(request.headers);
    //this.logger.log(`Request: ${method} ${url}`);

    const now = Date.now();

    return next
      .handle()
      .pipe(tap(() => console.log(`After ... ${Date.now() - now}ms`)));
  }
}
