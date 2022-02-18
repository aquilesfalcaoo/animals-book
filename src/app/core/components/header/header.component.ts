import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user$ = this.userService.retornarUser();

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.toastr.success('Desconectado!', 'Volte Sempre!', {
      timeOut: 3000,
      progressBar: true,
    });
  }
}
