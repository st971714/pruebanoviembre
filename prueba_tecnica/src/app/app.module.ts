import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DateTimeComponent } from './components/datetime/datetime.component';
import { PdflistComponent } from './components/pdflist/pdflist.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DateTimeComponent,
    PdflistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
