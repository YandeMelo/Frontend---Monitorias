import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMonitoriaComponent } from './consultar-monitoria.component';

describe('ConsultarMonitoriaComponent', () => {
  let component: ConsultarMonitoriaComponent;
  let fixture: ComponentFixture<ConsultarMonitoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarMonitoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarMonitoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
