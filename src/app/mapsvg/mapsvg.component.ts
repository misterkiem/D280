import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, ViewChildren } from '@angular/core';
import { CountryInfo } from '../CountryInfo';
import { CountryInfoService } from '../country-info.service';

@Component({
  selector: 'app-mapsvg',
  standalone: true,
  imports: [],
  templateUrl: './mapsvg.component.html',
  styleUrl: './mapsvg.component.css',
})
export class MapSvgComponent implements AfterViewInit {
  selectedInfo: CountryInfo | null = null;
  lastSelected: SVGElement | null = null;

  constructor(private service: CountryInfoService, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.addEventListener('click', this.onClicked.bind(this))
  }

  onClicked(event: MouseEvent) {
    const target = event.target as SVGElement;
    if (!target) return;
    const id = target.getAttribute('id');
    if (!id) return;
    if (this.lastSelected != null) {
      this.lastSelected.removeAttribute('selected');
    }
    this.lastSelected = target;
    target.setAttribute('selected', 'selected');
    this.service.SelectedCountryId = id;
  }
}
