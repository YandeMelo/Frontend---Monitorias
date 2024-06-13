import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoriasDisponiveisComponent } from './monitorias-disponiveis.component';

describe('MonitoriasDisponiveisComponent', () => {
  let component: MonitoriasDisponiveisComponent;
  let fixture: ComponentFixture<MonitoriasDisponiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoriasDisponiveisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoriasDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
