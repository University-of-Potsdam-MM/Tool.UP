import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { FeatureSearchComponent } from './pages/feature-search/feature-search.component';
import { FormsModule } from '@angular/forms';
import { AppsComponent } from './pages/apps/apps.component';
import { LoginComponent } from './pages/login/login.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormComponent } from './pages/form/form.component';
import { MenueComponent } from './pages/menue/menue.component';
import { FeatureFormComponent } from './pages/feature-form/feature-form.component';
import { CatFormComponent } from './pages/cat-form/cat-form.component';
import { EditToolComponent } from './pages/edit-tool/edit-tool.component';

const routes: Routes =
[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:id', component: CategoriesComponent},
  {path: 'application/:id', component: ApplicationsComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'features/:id', component: FeaturesComponent},
  {path: 'feature-search/:string', component: FeatureSearchComponent},
  {path: 'menue', component: MenueComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'form', component: FormComponent},
  {path: 'addfeature', component: FeatureFormComponent},
  {path: 'addcategory', component: CatFormComponent},
  {path: 'edittool', component: EditToolComponent},
  {path: 'feature/:id', component: AppsComponent},

];

@NgModule(
{
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})

/**
 * @class AppRoutingModule
 */
export class AppRoutingModule { }
