import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './container/home/home.component';
import { ResultsComponent } from './container/results/results.component';
import { BannerComponent } from './presentation/home/banner/banner.component';

/*Angular material form elements*/
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    HomeComponent,
    ResultsComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonToggleModule
  ]
})
export class AlintaEnergyModule { }