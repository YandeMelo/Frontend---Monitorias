import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarImagemComponent } from './alterar-imagem.component';

describe('AlterarImagemComponent', () => {
  let component: AlterarImagemComponent;
  let fixture: ComponentFixture<AlterarImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarImagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlterarImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
