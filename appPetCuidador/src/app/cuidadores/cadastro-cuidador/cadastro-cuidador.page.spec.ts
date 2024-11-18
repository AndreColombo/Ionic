import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroCuidadorPage } from './cadastro-cuidador.page';

describe('CadastroCuidadorPage', () => {
  let component: CadastroCuidadorPage;
  let fixture: ComponentFixture<CadastroCuidadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
