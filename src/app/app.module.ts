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
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { NgIfForSwitchExampleComponent } from './ng-if-for-switch-example/ng-if-for-switch-example.component';
import { ReactiveFormExComponent } from './forms/reactive-form-ex/reactive-form-ex.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormExComponent } from './forms/template-driven-form-ex/template-driven-form-ex.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BasicPipePipe,
    EmutedViewEncapsulationComponent,
    ShadowDomViewEncapusulationComponent,
    NonViewEncapusulationComponent,
    HttpResponseCompComponent,
    ChildCompComponent,
    ParentCompComponent,
    NgIfForSwitchExampleComponent,
    ReactiveFormExComponent,
    TemplateDrivenFormExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
