import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalPagarPage } from './total-pagar.page';

describe('TotalPagarPage', () => {
  let component: TotalPagarPage;
  let fixture: ComponentFixture<TotalPagarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
