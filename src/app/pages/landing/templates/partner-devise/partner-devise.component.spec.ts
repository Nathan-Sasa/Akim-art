import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerDeviseComponent } from './partner-devise.component';

describe('PartnerDeviseComponent', () => {
  let component: PartnerDeviseComponent;
  let fixture: ComponentFixture<PartnerDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerDeviseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
