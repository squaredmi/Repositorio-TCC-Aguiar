import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaixaInferior } from './faixa-inferior';

describe('FaixaInferior', () => {
  let component: FaixaInferior;
  let fixture: ComponentFixture<FaixaInferior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaixaInferior],
    }).compileComponents();

    fixture = TestBed.createComponent(FaixaInferior);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
