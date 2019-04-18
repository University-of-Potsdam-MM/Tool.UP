import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeatureSearchComponent } from './components/feature-search/feature-search.component';
import { FeaturesComponent } from './components/features/features.component';
import { AppsComponent } from './components/apps/apps.component';
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from './components/header/header.component';
import { DataService } from "./services/data.service";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormComponent } from './components/form/form.component';
import { Routes } from '@angular/router';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CatFormComponent } from './components/cat-form/cat-form.component';
import { FeatureFormComponent } from './components/feature-form/feature-form.component';
import { MenueComponent } from './components/menue/menue.component';
import { EditToolComponent } from './components/edit-tool/edit-tool.component';


const appRoutes: Routes = [
  {
    path: 'root',
    component: HomeComponent,
    data: { title: 'Alle Kategorien' }
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    FeatureSearchComponent,
    FeaturesComponent,
    AppsComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    CardsComponent,
    FormComponent,
    ApplicationsComponent,
    CatFormComponent,
    FeatureFormComponent,
    MenueComponent,
    EditToolComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
