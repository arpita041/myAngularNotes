import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';

const routes: Routes = [{ path: 'lazyy', component: FeatureComponent },{
  path:'lazzyAgain', component:LazyCompComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
