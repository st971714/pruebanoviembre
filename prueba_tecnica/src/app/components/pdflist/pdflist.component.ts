import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdflist',
  templateUrl: './pdflist.component.html',
  styleUrls: ['./pdflist.component.scss']
})
export class PdflistComponent implements OnInit {
  @Input() dataEntrante:any;
  imgPdf='../../../assets/icon_pdf.png';
  imgView='../../../assets/icon_viewW.png';
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataEntrante);
  }
}
