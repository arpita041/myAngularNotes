import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmutedViewEncapsulationComponent } from './emuted-view-encapsulation/emuted-view-encapsulation.component';
import { ShadowDomViewEncapusulationComponent } from './shadow-dom-view-encapusulation/shadow-dom-view-encapusulation.component';
import { NonViewEncapusulationComponent } from './non-view-encapusulation/non-view-encapusulation.component';

const routes: Routes = [{ path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  {path:'emuted', component:EmutedViewEncapsulationComponent},
  {path:'shadowDom', component:ShadowDomViewEncapusulationComponent},
  {path:'none', component:NonViewEncapusulationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
