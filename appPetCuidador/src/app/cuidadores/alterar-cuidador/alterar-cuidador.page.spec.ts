import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarCuidadorPage } from './alterar-cuidador.page';

describe('AlterarCuidadorPage', () => {
  let component: AlterarCuidadorPage;
  let fixture: ComponentFixture<AlterarCuidadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
