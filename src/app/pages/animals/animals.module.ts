import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardModule } from 'src/app/core/components/card/card.module';
import { AnimalsPhotosGridComponent } from './animals-photos-grid/animals-photos-grid.component';
import { AnimalComponent } from './animal/animal.component';
import { RouterModule } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalsPhotosGridComponent,
    AnimalComponent,
    AnimalDetailComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    NgxSpinnerModule,
    CardModule,
    RouterModule,
  ],
})
export class AnimalsModule {}
