import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  private originalURL = '';

  @Input() description = '';
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.originalURL = url;
    } else {
      this.originalURL = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.originalURL;
  }
}
