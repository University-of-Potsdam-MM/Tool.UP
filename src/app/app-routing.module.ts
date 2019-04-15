import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturesComponent } from './components/features/features.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { FeatureSearchComponent } from './components/feature-search/feature-search.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from "./components/login/login.component";
import { CardsComponent } from './components/cards/cards.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes =
[
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:id', component: CategoriesComponent},
  {path: 'application/:id', component: ApplicationsComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'features/:id', component: FeaturesComponent},
  {path: 'feature-search', component: FeatureSearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'form', component: FormComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule], 
})


export class AppRoutingModule {
 }


