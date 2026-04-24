import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRuc } from './consulta-ruc';

describe('ConsultaRuc', () => {
  let component: ConsultaRuc;
  let fixture: ComponentFixture<ConsultaRuc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaRuc],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaRuc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
