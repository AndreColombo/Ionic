import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCulturasPage } from './lista-culturas.page';

describe('ListaCulturasPage', () => {
  let component: ListaCulturasPage;
  let fixture: ComponentFixture<ListaCulturasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCulturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
