import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, NgxSpinnerModule],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderModule {}
