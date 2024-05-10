import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewComponent } from './mapview.component';

describe('MapviewComponent', () => {
  let component: MapViewComponent;
  let fixture: ComponentFixture<MapViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});