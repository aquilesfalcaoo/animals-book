import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponent } from 'src/app/pages/animals/animal-detail/animal-detail.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';

const routes: Routes = [
  { path: '', component: AnimalsListComponent },
  { path: ':animalId', component: AnimalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
