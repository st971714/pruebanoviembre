import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DateTimeComponent } from './components/datetime/datetime.component';
import { PdflistComponent } from './components/pdflist/pdflist.component';
import { ContenedorFlexboxComponent } from './components/contenedor-flexbox/contenedor-flexbox.component';
import { FormulariopoderComponent } from './components/formulariopoder/formulariopoder.component';
import { InicioReunionComponent } from './components/inicio-reunion/inicio-reunion.component';
import { MeetingsComponent } from './components/meetings/meetings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DateTimeComponent,
    PdflistComponent,
    ContenedorFlexboxComponent,
    FormulariopoderComponent,
    InicioReunionComponent,
    MeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
