import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoaDetalhePage } from './pessoa-detalhe.page';

describe('PessoaDetalhePage', () => {
  let component: PessoaDetalhePage;
  let fixture: ComponentFixture<PessoaDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
