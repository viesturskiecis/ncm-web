import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MonitoringComponent } from './monitoring.component';

@NgModule({
    imports: [RouterModule],
    declarations: [MonitoringComponent],
    exports: [MonitoringComponent]
})

export class MonitoringModule { }
