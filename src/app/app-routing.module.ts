import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeatureSearchComponent } from './components/feature-search/feature-search.component';
import { FormsModule } from '@angular/forms';


const routes: Routes =
[
  {path: 'home', component: HomeComponent, data: {title: 'Alle Kategorien'}},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:id', component: CategoriesComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'feature-search', component: FeatureSearchComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule], 
})


export class AppRoutingModule {
 }


