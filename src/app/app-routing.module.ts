import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdsGridComponent } from './ads-grid/ads-grid.component';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ads-grid', component: AdsGridComponent },
  { path: 'ads-list', component: AdsListComponent },
  { path: 'ads-detail', component: AdDetailComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
