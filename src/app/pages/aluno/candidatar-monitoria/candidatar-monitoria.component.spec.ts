import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatarMonitoriaComponent } from './candidatar-monitoria.component';

describe('CandidatarMonitoriaComponent', () => {
  let component: CandidatarMonitoriaComponent;
  let fixture: ComponentFixture<CandidatarMonitoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatarMonitoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatarMonitoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
