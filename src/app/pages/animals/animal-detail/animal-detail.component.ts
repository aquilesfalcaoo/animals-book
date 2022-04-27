import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/pages/animals/animal';
import { AnimalsService } from '../../../core/services/animals/animals.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['animalId'];
    this.animal$ = this.animalsService.searchByID(this.animalId);
  }
}
