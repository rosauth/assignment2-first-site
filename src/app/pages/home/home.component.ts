import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/Country.service'
import { Country } from 'src/app/constants/country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCountry: Array<Country>;
  largestCountry: Array<Country>;

  constructor(private service: CountryService) { }

  ngOnInit(): void {
    this.service.getCountry().subscribe((country) => {
      this.allCountry = country;
      this.allCountry = this.allCountry.sort((a,b) => b.population-a.population).slice(0, 3);

      this.largestCountry = country;
      this.largestCountry = this.largestCountry.sort((a, b) => b.area-a.area).slice(0,3);
    });
  }

}
