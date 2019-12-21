import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CategorybarComponent } from './categorybar/categorybar.component';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdTileComponent } from './ad-tile/ad-tile.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { ComponentsModule } from './components.module';
import { AdsGridComponent } from './ads-grid/ads-grid.component';
import { AdsGridFilterComponent } from './ads-grid-filter/ads-grid-filter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CategorybarComponent,
    AdsListComponent,
    AdTileComponent,
    AdsGridComponent,
    AdsGridFilterComponent,
    PageNotFoundComponent,
    AdDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
