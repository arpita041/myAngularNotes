import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-for-switch-example',
  templateUrl: './ng-if-for-switch-example.component.html',
  styleUrl: './ng-if-for-switch-example.component.scss'
})
export class NgIfForSwitchExampleComponent {
displayBox:boolean=false;
displayContent=[{name:'Arpita',ign:['Nyxia']},{name:'Akki',ign:['Vector','Payback','Notice_Me']}]
chooseIgn:string='Nyxia';
isArray(value: any): boolean {
  return Array.isArray(value);
}
}
