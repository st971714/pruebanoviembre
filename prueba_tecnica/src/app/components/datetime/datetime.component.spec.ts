import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeComponent } from './datetime.component';

describe('DateTimeComponent', () => {
  let component: DateTimeComponent;
  let fixture: ComponentFixture<DateTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  setInterval(() => {
    let reloj = document.getElementsByClassName("reloj")[0];


  }, 1000)
});
