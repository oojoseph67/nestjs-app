import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Observable, tap, map } from 'rxjs';
import appConfig from 'src/config/index.config';

@Injectable()
export class DataResponseInterceptor implements NestInterceptor {
  constructor(
    // injecting config

    @Inject(appConfig.KEY)
    private appConfiguration: ConfigType<typeof appConfig>,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // executed before method execution
    console.log('before ...', {});
    console.log({ context });

    // executed before method execution

    return next.handle().pipe(
      map((data) => {
        // executed after method execution

        console.log('after ...', {});
        console.log({ data });
        // do something here after the request is handled

        return {
          apiVersion: this.appConfiguration.apiVersion,
          data: data,
        };
      }),

      // executed after method execution
    );
  }
}
