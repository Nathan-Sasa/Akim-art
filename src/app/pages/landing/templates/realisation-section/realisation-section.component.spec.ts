import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationSectionComponent } from './realisation-section.component';

describe('RealisationSectionComponent', () => {
  let component: RealisationSectionComponent;
  let fixture: ComponentFixture<RealisationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealisationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
