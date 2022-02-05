import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './component/signin/signin.component';
import { UserinfoService } from './userinfo.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@NgModule({
  providers:[UserinfoService],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    SigninComponent,AuthComponent
  ],
  declarations: [AuthComponent,SigninComponent]
})
export class AuthModule { }
