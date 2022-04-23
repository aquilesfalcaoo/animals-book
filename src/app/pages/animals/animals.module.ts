import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AnimalComponent } from './animal/animal.component';
import { CardModule } from 'src/app/core/components/card/card.module';
import { AnimalsPhotosGridComponent } from './animals-photos-grid/animals-photos-grid.component';

@NgModule({
  declarations: [AnimalsListComponent, AnimalComponent, AnimalsPhotosGridComponent],
  imports: [CommonModule, AnimalsRoutingModule, NgxSpinnerModule, CardModule],
})
export class AnimalsModule {}
