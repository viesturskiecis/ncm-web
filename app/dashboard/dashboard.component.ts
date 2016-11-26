import { Component, ViewEncapsulation } from '@angular/core';

/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.css'],
	encapsulation: ViewEncapsulation.None,
})

export class DashboardComponent { }
