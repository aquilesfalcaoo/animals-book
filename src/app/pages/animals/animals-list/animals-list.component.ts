import { Component, OnInit } from '@angular/core';
import { AnimalsService } from 'src/app/core/services/animals/animals.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { Animals } from '../animal';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
})
export class AnimalsListComponent implements OnInit {
  animals!: Animals;

  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.userService.retornarUser().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      this.animalsService.userList(userName).subscribe((animals) => {
        this.animals = animals;
      });
    });
  }
}
