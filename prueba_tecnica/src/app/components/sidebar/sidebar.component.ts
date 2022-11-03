import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userLog:string ='../../../assets/269786735_4352749981502343_130792020045048713_n.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
