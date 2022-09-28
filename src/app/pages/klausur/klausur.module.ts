import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KlausurPage } from './klausur.page';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [KlausurPage],
  imports: [
    CommonModule,
    NgxPageScrollModule,
    RouterModule.forChild([
      {
        path: '',
        component: KlausurPage,
        data: {
          title: 'Klausur',
          description:
            'OSCA Klausur',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class KlausurModule {}
