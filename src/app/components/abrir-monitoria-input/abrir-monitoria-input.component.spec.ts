import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirMonitoriaInputComponent } from './abrir-monitoria-input.component';

describe('AbrirMonitoriaInputComponent', () => {
  let component: AbrirMonitoriaInputComponent;
  let fixture: ComponentFixture<AbrirMonitoriaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirMonitoriaInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbrirMonitoriaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
