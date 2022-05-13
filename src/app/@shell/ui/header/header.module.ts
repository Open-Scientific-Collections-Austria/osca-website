import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, NgxPageScrollModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
