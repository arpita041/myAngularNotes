import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { BasicPipePipe } from './basic-pipe.pipe';
import { EmutedViewEncapsulationComponent } from './emuted-view-encapsulation/emuted-view-encapsulation.component';
import { ShadowDomViewEncapusulationComponent } from './shadow-dom-view-encapusulation/shadow-dom-view-encapusulation.component';
import { NonViewEncapusulationComponent } from './non-view-encapusulation/non-view-encapusulation.component';
import { HttpResponseCompComponent } from './http-response-comp/http-response-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BasicPipePipe,
    EmutedViewEncapsulationComponent,
    ShadowDomViewEncapusulationComponent,
    NonViewEncapusulationComponent,
    HttpResponseCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
