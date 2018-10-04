import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent }   from './not-found.component';
import { LoginRoutingModule }      from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ItemSaveComponent } from './item-save/item-save.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    MenuComponent,
    ItemSaveComponent,
    ItemComponent,

  ],
  imports: [
    AppRoutingModule,
    LoginRoutingModule,
    HttpClientModule,
    
    FormsModule,
    LoginModule,
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
