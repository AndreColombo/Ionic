import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservadoPage } from './reservado.page';

describe('ReservadoPage', () => {
  let component: ReservadoPage;
  let fixture: ComponentFixture<ReservadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
