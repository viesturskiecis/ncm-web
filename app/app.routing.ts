import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { TestComponent, Test2Component, Test3Component } from './test/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, children: [{ path: 'test', component: TestComponent },
    { path: 'test2', component: Test2Component }, 
    { path: 'test3', component: Test3Component }], canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);