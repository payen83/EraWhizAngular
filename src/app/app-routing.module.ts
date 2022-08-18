import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormViewComponent } from './pages/form/form-view/form-view.component';
import { FormComponent } from './pages/form/form.component';
import { TableViewComponent } from './pages/form/table-view/table-view.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'form', 
    component: FormComponent,
    children: [
      { path: 'form-view', component: FormViewComponent },
      { path: 'table-view', component: TableViewComponent },
      { path: '', redirectTo: 'form-view', pathMatch: 'full' }
    ] 
  },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
