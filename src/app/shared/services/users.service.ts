import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../model/user';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
userUrl:string=`${environment.baseUrl}/users.json`

  constructor( private http:HttpClient, private _loaderserv:LoaderService) { }

  getdatauser():Observable<any>{
    return this.http.get(this.userUrl)
    .pipe(
      map((res:any)=>{
        let userarr:Array<Iuser>=[]
        for (const key in res) {
          userarr.push({...res[key],userId:key}) 
        }
        return userarr
      })
    )
  }
  singleobj(id:string):Observable<Iuser>{
    let singleurl=`${environment.baseUrl}/users/${id}.json`
    return this.http.get<Iuser>(singleurl)
  }
  cretenewuser(user:Iuser):Observable<Iuser>{
    this._loaderserv.openmatsnackbar(`user is ${user.title} and ${user.body}`,'close')
    return this.http.post<Iuser>(this.userUrl,user)
   
  }

  updateuserobj(updateobj:Iuser,updateid:string):Observable<Iuser>{
    let updateurl=`${environment.baseUrl}/users/${updateid}.json`
   return this.http.patch<Iuser>(updateurl,updateobj)
  }
  delteuser(id:string):Observable<null>{
    let delteUrl=`${environment.baseUrl}/users/${id}.json`
    return this.http.delete<null>(delteUrl)
  }

}
