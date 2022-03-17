import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CountUpModule } from 'ngx-countup';

@NgModule({
  declarations: [HomePage],
  imports: [
    CountUpModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        data: {
          title: 'Home',
          description:
            'Angular starter for enterprise-grade front-end projects, built under a clean architecture that helps to scale and maintain a fast workflow.',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class HomeModule {}
