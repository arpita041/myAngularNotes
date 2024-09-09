import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';


@NgModule({
  declarations: [
    FeatureComponent,
    LazyCompComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
