import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeaturesSearchComponent } from './components/features-search/features-search.component';
import { FeatureSearchComponent } from './components/feature-search/feature-search.component';
import { AppFeaturesComponent } from './components/app-features/app-features.component';
import { AppsComponent } from './components/apps/apps.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    CategoriesComponent,
    FeaturesComponent,
    FeaturesSearchComponent,
    FeatureSearchComponent,
    AppFeaturesComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
