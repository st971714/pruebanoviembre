import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariopoderComponent } from './formulariopoder.component';

describe('FormulariopoderComponent', () => {
  let component: FormulariopoderComponent;
  let fixture: ComponentFixture<FormulariopoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariopoderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariopoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
