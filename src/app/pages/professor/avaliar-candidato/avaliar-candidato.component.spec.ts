import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarCandidatoComponent } from './avaliar-candidato.component';

describe('AvaliarCandidatoComponent', () => {
  let component: AvaliarCandidatoComponent;
  let fixture: ComponentFixture<AvaliarCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliarCandidatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaliarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
