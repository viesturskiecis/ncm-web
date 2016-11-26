import { Routes, RouterModule } from '@angular/router';

import { LoginRoutes, LoginComponent } from './login/index';
import { RegisterRoutes } from './register/index';
import { DashboardRoutes } from './dashboard/index';

const appRoutes: Routes = [
	...LoginRoutes,
	...RegisterRoutes,
	...DashboardRoutes,

    // otherwise redirect to home
    { path: '**', component: LoginComponent }
];

export const routing = RouterModule.forRoot(appRoutes);