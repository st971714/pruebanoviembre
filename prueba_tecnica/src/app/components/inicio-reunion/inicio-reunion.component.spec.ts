import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioReunionComponent } from './inicio-reunion.component';

describe('InicioReunionComponent', () => {
  let component: InicioReunionComponent;
  let fixture: ComponentFixture<InicioReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioReunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
