import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emuted-view-encapsulation',
  templateUrl: './emuted-view-encapsulation.component.html',
  styleUrl: './emuted-view-encapsulation.component.scss',
  encapsulation: ViewEncapsulation.Emulated  //default 
})
export class EmutedViewEncapsulationComponent {

}
