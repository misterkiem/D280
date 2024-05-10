import { Injectable } from '@angular/core';
import { CountryInfo } from './CountryInfo';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryInfoService {

  constructor() {
  }

  static urlFirst: string = 'http://api.worldbank.org/v2/country/';
  static urlSecond: string = '?format=json';

  private selectedCountryId: string = '';
  public get SelectedCountryId() { return this.selectedCountryId }
  public set SelectedCountryId(id: string) {
    this.selectedCountryId = id;
    this.setCountryInfoAsync(this.fetchInfo(id));
  }

  private selectedCountryInfo = new BehaviorSubject<any>(new CountryInfo());
  selectedCountryInfo$ = this.selectedCountryInfo.asObservable();


  public updateSelectedCountryInfo(info: CountryInfo) {
    this.selectedCountryInfo.next(info);
  }

  async setCountryInfoAsync(info: Promise<CountryInfo>) {
    let countryInfo = await info;
    this.updateSelectedCountryInfo(countryInfo);
  }

  async fetchInfo(countryId: string): Promise<CountryInfo> {
    const url = CountryInfoService.urlFirst + countryId + CountryInfoService.urlSecond;
    const result = await fetch(url);
    const info = await result.json();
    const countryData = info[1][0];
    var countryInfo = new CountryInfo();
    countryInfo.name = countryData.name;
    countryInfo.capital = countryData.capitalCity;
    countryInfo.cap_lat = countryData.latitude;
    countryInfo.cap_long = countryData.longitude;
    countryInfo.region = countryData.region.value;
    countryInfo.income_level = countryData.incomeLevel.value;
    return countryInfo;
  }

}