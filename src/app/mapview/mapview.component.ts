import { Component } from '@angular/core';
import { MapSvgComponent } from '../mapsvg/mapsvg.component';
import { CountryInfoService } from '../country-info.service';
import { CountryInfo } from '../CountryInfo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mapview',
  standalone: true,
  imports: [MapSvgComponent],
  templateUrl: './mapview.component.html',
  styleUrl: './mapview.component.css'
})
export class MapViewComponent {
  constructor(private countryInfoService: CountryInfoService) { }

  SelectedCountryInfo: CountryInfo | null = null;
  selectedCountryInfoSubscription: Subscription = new Subscription();

  ngOnInit() {
    this.selectedCountryInfoSubscription = this.countryInfoService.selectedCountryInfo$.subscribe((info: CountryInfo) => this.SelectedCountryInfo = info)
  }
}
