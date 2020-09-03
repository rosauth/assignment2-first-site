import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/Country.service';
import { Country } from 'src/app/constants/country';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  listCountry:Array<Country>;
  country:Country;
  id:string;

  constructor(private route:ActivatedRoute,private location:Location,private countryService:CountryService) { }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getAllCountries();
  }
  
  getAllCountries(){
    this.countryService.getCountry().subscribe((v)=>{
      this.listCountry=v;
      this.country=this.listCountry.filter((v)=>v.id==this.id)[0];
      console.log(this.country)
    });
  }

}
