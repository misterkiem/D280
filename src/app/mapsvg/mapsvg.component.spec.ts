import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSvgComponent } from './mapsvg.component';

describe('MapSvgComponent', () => {
  let component: MapSvgComponent;
  let fixture: ComponentFixture<MapSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
