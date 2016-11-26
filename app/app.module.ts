import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

 
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
 
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService} from './_services/index';
import { CaseService } from './_services/case/index';

 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LoginModule,
        RegisterModule,
        DashboardModule,
        SharedModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        CaseService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }