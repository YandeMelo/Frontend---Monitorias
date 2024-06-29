import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoLayoutComponent } from './aluno-layout.component';

describe('AlunoLayoutComponent', () => {
  let component: AlunoLayoutComponent;
  let fixture: ComponentFixture<AlunoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlunoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
