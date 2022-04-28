import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['animalId'];
    this.animal$ = this.animalsService.searchByID(this.animalId);
  }

  like() {
    this.animalsService.like(this.animalId).subscribe((liked) => {
      if (liked) {
        this.animal$ = this.animalsService.searchByID(this.animalId);
      }
    });
  }

  delete() {
    this.animalsService.animalDelete(this.animalId).subscribe(
      () => {
        this.router.navigate(['/animals/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
