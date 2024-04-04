import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashBoardComponent } from './shared/component/userdash-board/userdash-board.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';
import { UserComponent } from './shared/component/user/user.component';
const routes: Routes = [
  {path:'home',component:UserdashBoardComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'user/add-form',component:UserFormComponent},
  {path:'user/:userid',component:UserComponent},
  {path:'user/:userid/edit',component:UserFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
