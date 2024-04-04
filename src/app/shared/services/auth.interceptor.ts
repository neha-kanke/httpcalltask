import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _loaderservice:LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // this._loaderservice.loadersubject$.next(true)
    this._loaderservice.sendloadervalue.next(true)
    let headersclone = request.clone({
      setHeaders: {
        'content-type': "Application/json",
        'authtest': 'jwt token'
      }

    })
    return next.handle(headersclone)
    .pipe(
      delay(1500),
      finalize(()=>{
        // this._loaderservice.loadersubject$.next(false)
        this._loaderservice.sendloadervalue.next(false)
      })
    )
   
  }
}
