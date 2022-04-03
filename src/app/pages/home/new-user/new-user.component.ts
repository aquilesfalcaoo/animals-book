import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { NewUserService } from 'src/app/core/services/new-user/new-user.service';
import { UserExistsService } from 'src/app/core/services/new-user/user-exists.service';
import { NewUser } from 'src/app/shared/interface/new-user/new-user';
import { lowercaseValidator } from './lowercase.validator';
import { userPasswordEqualsValidator } from './user-password-equals.validator';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  newUserForm = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExists: UserExistsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [Validators.required],
          [lowercaseValidator],
          [this.userExists.usuarioJaExiste()],
        ],
        password: ['', [Validators.required]],
      },
      {
        validators: [userPasswordEqualsValidator],
      }
    );
  }

  cadastrar() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.cadastraNovoUsuario(newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          throw new Error(error);
        }
      );
    }
  }
}
