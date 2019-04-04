import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './components/root/root.component'; 
import { CategoriesComponent } from './components/categories/categories.component';
import { AppFeaturesComponent } from './components/app-features/app-features.component';

const routes: Routes = 
[
  {path: 'root', component: RootComponent}, 
  {path: 'categories', component: CategoriesComponent},
  {path: 'features', component: AppFeaturesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

 }


