import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AnimalsService } from 'src/app/core/services/animals/animals.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Animals } from '../animal';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
})
export class AnimalsListComponent implements OnInit {
  animals$!: Observable<Animals>;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals() {
    this.animals$ = this.userService.retornarUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);
      })
    );
  }
}
