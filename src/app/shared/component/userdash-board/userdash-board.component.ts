import { Component, OnInit, inject } from '@angular/core';
import { Iuser } from '../../model/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-userdash-board',
  templateUrl: './userdash-board.component.html',
  styleUrls: ['./userdash-board.component.scss']
})
export class UserdashBoardComponent implements OnInit {
userarr !:Array<Iuser>
private _userservices=inject(UsersService)
  constructor() { }

  ngOnInit(): void {
    this._userservices.getdatauser()
    .subscribe((res:Array<Iuser>)=>{
      this.userarr=res  
    })
  }

}
