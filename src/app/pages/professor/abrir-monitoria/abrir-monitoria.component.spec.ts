import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirMonitoriaComponent } from './abrir-monitoria.component';

describe('AbrirMonitoriaComponent', () => {
  let component: AbrirMonitoriaComponent;
  let fixture: ComponentFixture<AbrirMonitoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirMonitoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbrirMonitoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
