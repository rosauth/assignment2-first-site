import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Country} from '../constants/country'

@Injectable({
    providedIn: 'root'
})
export class CountryService{
    private BASE_URL = 'https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/country';
    constructor(private http: HttpClient){}
    getCountry(){
        return this.http.get<Country[]>(`${this.BASE_URL}`)
    }
    updateCountry(country: Country){
        return this.http.put(`${this.BASE_URL}/${country.id}`, country);
    }
    deleteCountry(countryId: String){
        return this.http.delete(`${this.BASE_URL}/${countryId}`);
    }
}