import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private auth: AuthenticationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  login() {
    this.auth.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      },
      (error) => {
        alert('Usuário ou Senha Inválidos!');
        console.log(error);
      }
    );
  }
}
