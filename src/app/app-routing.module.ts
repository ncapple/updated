
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ListComponent, pathMatch: 'full' },
  { path: 'products/new', component: NewComponent, pathMatch: 'full' },
  { path: 'products/:id/edit', component: UpdateComponent, pathMatch: 'full' },
  { path: 'products/product/:id', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
