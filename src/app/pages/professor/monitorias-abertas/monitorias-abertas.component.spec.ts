import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoriasAbertasComponent } from './monitorias-abertas.component';

describe('MonitoriasAbertasComponent', () => {
  let component: MonitoriasAbertasComponent;
  let fixture: ComponentFixture<MonitoriasAbertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoriasAbertasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoriasAbertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
