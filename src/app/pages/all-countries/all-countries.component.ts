import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/Country.service';
import { Country } from 'src/app/constants/country';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  allCountry: Array<Country>;

  constructor(private service: CountryService) { }

  ngOnInit(): void {
    this.service.getCountry().subscribe((countries) => {
      this.allCountry = countries;
    })
  }

}
