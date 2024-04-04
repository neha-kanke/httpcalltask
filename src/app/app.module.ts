import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdashBoardComponent } from './shared/component/userdash-board/userdash-board.component';
import { UserCardComponent } from './shared/component/user-card/user-card.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserComponent } from './shared/component/user/user.component'
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    UserdashBoardComponent,
    UserCardComponent,
    UserFormComponent,
    NavbarComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule

   
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
