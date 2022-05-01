import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AnimalsService } from 'src/app/core/services/animals/animals.service';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.scss'],
})
export class NewAnimalComponent implements OnInit {
  formAnimal!: FormGroup;
  file!: File;
  preview!: string;
  percentageComplete = 0;

  constructor(
    private animalsService: AnimalsService,
    private form: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formValidator();
  }

  formValidator() {
    this.formAnimal = this.form.group({
      file: [null, Validators.required],
      description: [null, Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const allowComments = this.formAnimal.get('allowComments')?.value ?? false;
    const description = this.formAnimal.get('description')?.value ?? '';
    this.animalsService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['animals'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentageComplete = Math.round(100 * (event.loaded / total));
          }
        },
        (error) => console.log(error)
      );
  }

  fileRecorder(fileName: any): void {
    const [file] = fileName?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }

  feedBack() {
    this.router.navigate(['/animals']);
  }
}
