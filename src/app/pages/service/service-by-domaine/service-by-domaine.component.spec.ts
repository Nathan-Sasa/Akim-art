import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceByDomaineComponent } from './service-by-domaine.component';

describe('ServiceByDomaineComponent', () => {
  let component: ServiceByDomaineComponent;
  let fixture: ComponentFixture<ServiceByDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceByDomaineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceByDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
