import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../animal';

@Component({
  selector: 'app-animals-photos-grid',
  templateUrl: './animals-photos-grid.component.html',
  styleUrls: ['./animals-photos-grid.component.scss'],
})
export class AnimalsPhotosGridComponent implements OnInit {
  @Input() animals!: Animals;

  constructor() {}

  ngOnInit(): void {}
}
