import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-non-view-encapusulation',
  templateUrl: './non-view-encapusulation.component.html',
  styleUrl: './non-view-encapusulation.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class NonViewEncapusulationComponent {

}
