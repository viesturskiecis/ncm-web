import {Component, OnInit} from '@angular/core';

import { Case } from '../../_models/case/index';
import { CaseService } from '../../_services/case/index';

@Component({
	moduleId: module.id,
	selector: 'cases-cmp',
	templateUrl: 'cases.component.html'
})

export class CasesComponent  implements OnInit {
    cases: Case[] = [];

    constructor(private caseService: CaseService) { }

    ngOnInit() {
        // get users from secure api end point
        this.caseService.getCases()
            .subscribe(cases => {
                this.cases = cases;
            });
    }

}