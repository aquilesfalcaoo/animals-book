import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

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
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.auth.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
        this.toastr.success('Logado com Sucesso!', 'Bem Vindo!', {
          timeOut: 2500,
          progressBar: true,
        });
      },
      (error) => {
        this.toastr.error('Tente Novamente!', 'Usuário ou Senha Inválido!', {
          timeOut: 2500,
          progressBar: true,
        });
        console.log(error);
      }
    );
  }
}
