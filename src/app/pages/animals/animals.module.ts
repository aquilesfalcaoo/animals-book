import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AnimalsListComponent],
  imports: [CommonModule, AnimalsRoutingModule, NgxSpinnerModule],
})
export class AnimalsModule {}
