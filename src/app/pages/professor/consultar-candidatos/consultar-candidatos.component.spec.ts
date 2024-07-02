import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCandidatosComponent } from './consultar-candidatos.component';

describe('ConsultarCandidatosComponent', () => {
  let component: ConsultarCandidatosComponent;
  let fixture: ComponentFixture<ConsultarCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarCandidatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
