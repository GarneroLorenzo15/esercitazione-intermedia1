import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from 'src/app/detail/detail.component';
import { ListComponent } from 'src/app/list/list.component';

const routes: Routes = [
  { path: 'drinks', component: ListComponent },
  { path: '', redirectTo: '/drinks', pathMatch: 'full' },
  { path: 'drinks/detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
