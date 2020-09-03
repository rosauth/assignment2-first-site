import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { AllCountriesComponent } from './pages/all-countries/all-countries.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "details/:id", component: CountryDetailsComponent},
  {path: "countryList", component: AllCountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
