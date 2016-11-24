import { Component, OnInit } from '@angular/core';
 
@Component({
    selector: 'greencases',
    moduleId: module.id,
    templateUrl: 'greencases.component.html'
})
 
export class GreenCasesComponent {
    public greencases:Array<any> = [
    {caseid: 'case 1', debtorid: '1111111111111'},
    {caseid: 'case 2', debtorid: '22222222222222'},
    {caseid: 'case 3', debtorid: '33333333333333333'},
  ];
 
    constructor() {}
 
  };

}