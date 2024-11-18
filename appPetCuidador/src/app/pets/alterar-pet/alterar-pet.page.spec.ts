import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarPetPage } from './alterar-pet.page';

describe('AlterarPetPage', () => {
  let component: AlterarPetPage;
  let fixture: ComponentFixture<AlterarPetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
