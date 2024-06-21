import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCandidaturaComponent } from './status-candidatura.component';

describe('StatusCandidaturaComponent', () => {
  let component: StatusCandidaturaComponent;
  let fixture: ComponentFixture<StatusCandidaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusCandidaturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusCandidaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
