import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarMonitoriaComponent } from './avaliar-monitoria.component';

describe('AvaliarMonitoriaComponent', () => {
  let component: AvaliarMonitoriaComponent;
  let fixture: ComponentFixture<AvaliarMonitoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliarMonitoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaliarMonitoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
