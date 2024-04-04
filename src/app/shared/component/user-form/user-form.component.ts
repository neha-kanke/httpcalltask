import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup
  iseditmode: boolean = false
  userid!: string
  userobj2 !: Iuser
  constructor(private _userservice: UsersService, private _routes: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.createuserfrom()
    this.editpatchvalue()
    console.log(this.userid);

  }
  createuserfrom() {
    this.userForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required])
    })
  }

  onadduser() {
    if (this.userForm.valid) {
      let newobj = this.userForm.value
      this._userservice.cretenewuser(newobj)
        .subscribe(res => {
          console.log(res);
          this.userForm.reset()
          this._router.navigate(['home'])
        })
    }
  }


  editpatchvalue() {
    this._routes.params
      .subscribe(res => {
        this.userid = res['userid']
        if (this.userid) {
          this.iseditmode = true
          this._userservice.singleobj(this.userid)
            .subscribe((res: Iuser) => {
              this.userobj2 = res
              this.userForm.patchValue(this.userobj2)
            })
        }
      })
  }


  onupdate() {
    if (this.userForm.valid) {
      let updateuser: Iuser = this.userForm.value
      this._userservice.updateuserobj(updateuser, this.userid)
        .subscribe((res: Iuser) =>{
          console.log(res);
          this.userForm.reset()
          this._router.navigate(['/home'])
        }) 
    }
  }
}


