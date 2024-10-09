import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from '../../model/user';
import { UsersService } from '../../services/users.service';
import { concat, concatMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userid !:string
userobj1 !:Iuser
catarr:Array<string>=["city","food","nature","wildlife"]
  constructor(private _routes:ActivatedRoute,private _userservices:UsersService,private _router:Router) { }
    

  
  ngOnInit(): void {

    // this._routes.params.subscribe(res=>{
    //   this.userid=res['userid']
    //   if(this.userid){
    //     this._userservices.singleobj(this.userid)
    //     .subscribe((res:Iuser)=>{
    //       this.userobj1=res
    //     })
    //   }
    // })
  }
  ondelte(){
    this._userservices.delteuser(this.userid)
    .subscribe((res:null)=>{
      console.log(res);
      this._router.navigate(['home'])
    })
  }




  get getcatg(){
    return this.catarr[Math.floor(Math.random()*4)]
  }
}
