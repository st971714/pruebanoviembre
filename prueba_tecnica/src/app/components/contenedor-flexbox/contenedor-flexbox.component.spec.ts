import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorFlexboxComponent } from './contenedor-flexbox.component';

describe('ContenedorFlexboxComponent', () => {
  let component: ContenedorFlexboxComponent;
  let fixture: ComponentFixture<ContenedorFlexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorFlexboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorFlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
