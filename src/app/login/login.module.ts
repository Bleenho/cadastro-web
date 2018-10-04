import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule }   from '@angular/common';

@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      LoginRoutingModule
    ],
    declarations: [
      LoginComponent
    ]
  })
export class LoginModule {}
