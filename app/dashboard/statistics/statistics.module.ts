import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StatisticsComponent } from './statistics.component';

@NgModule({
    imports: [RouterModule],
    declarations: [StatisticsComponent],
    exports: [StatisticsComponent]
})

export class StatisticsModule { }
