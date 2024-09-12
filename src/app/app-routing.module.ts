import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmutedViewEncapsulationComponent } from './emuted-view-encapsulation/emuted-view-encapsulation.component';
import { ShadowDomViewEncapusulationComponent } from './shadow-dom-view-encapusulation/shadow-dom-view-encapusulation.component';
import { NonViewEncapusulationComponent } from './non-view-encapusulation/non-view-encapusulation.component';
import { HttpResponseCompComponent } from './http-response-comp/http-response-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { basicGuardExampleGuard } from './guard/basic-guard-example.guard';
import { NgIfForSwitchExampleComponent } from './ng-if-for-switch-example/ng-if-for-switch-example.component';
import { ReactiveFormExComponent } from './forms/reactive-form-ex/reactive-form-ex.component';
import { TemplateDrivenFormExComponent } from './forms/template-driven-form-ex/template-driven-form-ex.component';


const routes: Routes = [{ path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  {path:'emuted', component:EmutedViewEncapsulationComponent},
  {path:'shadowDom', component:ShadowDomViewEncapusulationComponent},
  {path:'none', component:NonViewEncapusulationComponent},
  {path:'httpReqs', component:HttpResponseCompComponent},
  {path:'viewChildEX', component:ParentCompComponent, canActivate:[basicGuardExampleGuard]},
  {path:'ifFor', component:NgIfForSwitchExampleComponent},
  {path:'form', component:ReactiveFormExComponent},
  {path:'tempForm', component:TemplateDrivenFormExComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
