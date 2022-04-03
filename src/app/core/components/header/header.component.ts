import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
    this.toastr.success('Volte Sempre!', 'Desconectado', {
      timeOut: 3000,
      progressBar: true,
    });
  }
}
