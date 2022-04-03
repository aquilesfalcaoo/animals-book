import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const API = 'http://localhost:3000';
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
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.auth.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.toastr.success('Logado com Sucesso!', 'Bem Vindo!', {
          timeOut: 1500,
          progressBar: true,
        });
        this.router.navigate(['animals']);
      },
      (error) => {
        this.toastr.error('Tente Novamente!', 'Usuário ou Senha Inválido!', {
          timeOut: 1500,
          progressBar: true,
        });
        console.log(error);
      }
    );
  }
}
