import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeatureSearchComponent } from './components/feature-search/feature-search.component';
import { AppFeaturesComponent } from './components/app-features/app-features.component';
import { AppsComponent } from './components/apps/apps.component';
import { RootComponent } from "./components/root/root.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    FeatureSearchComponent,
    AppFeaturesComponent,
    AppsComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
