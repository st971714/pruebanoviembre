import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userLog:string ='../../../assets/269786735_4352749981502343_130792020045048713_n.jpg';
  pdfs: Array<any>=[];
  constructor() { }

  ngOnInit(): void {
    this.pdfs=[
      {
        filePdf:'../../../assets/icon_pdf.png',
        text: 'Orden del día.pdf',
        view:'../../../assets/view-512.webp',
      },
      {
        filePdf:'../../../assets/icon_pdf.png',
        text: 'Informe junta.pdf',
        view:'../../../assets/view-512.webp',
      },
      {
        filePdf:'../../../assets/icon_pdf.png',
        text: 'Informe gerente.pdf',
        view:'../../../assets/view-512.webp',
      },
      {
        filePdf:'../../../assets/icon_pdf.png',
        text: 'Informe financiero.pdf',
        view:'../../../assets/view-512.webp',
      },
      {
        filePdf:'../../../assets/icon_pdf.png',
        text: 'Preposiciones.pdf',
        view:'../../../assets/view-512.webp',
      },
    ]
  }

}
