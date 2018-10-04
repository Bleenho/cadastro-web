import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';

import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { ItemSaveComponent } from './item-save/item-save.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'itens', component: ItemComponent },
  { path: 'acessos', component: AcessoComponent },
  { path: 'item-save', component: ItemSaveComponent },
  { path: '**', redirectTo: '/PageNotFoundComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard
  ]
})

export class AppRoutingModule { }
