import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {}

  login() {
    this.auth.autenticar(this.usuario, this.senha).subscribe(
      () => {
        console.log('Autenticado com Sucesso!');
      },
      (error) => {
        alert('Usuário ou Senha Inválidos!');
        console.log(error);
      }
    );
  }
}
