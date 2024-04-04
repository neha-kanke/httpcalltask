import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
private loadersubject$:Subject<boolean>= new BehaviorSubject<boolean>(false)
newloadersubjec$:Observable<boolean>=this.loadersubject$.asObservable()
 
  constructor(private _matsackbar:MatSnackBar) { }

get  sendloadervalue(){
   return this.loadersubject$
  }

  openmatsnackbar(smg:string,action:string){
    this._matsackbar.open(smg,action,{
      duration:2000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
  }
}
