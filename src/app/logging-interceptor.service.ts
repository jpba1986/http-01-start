import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('outgoing request');
        return next.handle(req)
        .pipe(tap(event => {
            if(event.type === HttpEventType.Response){
console.log('incoming response');
console.log(event.body);
            }
        }));
    }
}