import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdflistComponent } from './pdflist.component';

describe('PdflistComponent', () => {
  let component: PdflistComponent;
  let fixture: ComponentFixture<PdflistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdflistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
