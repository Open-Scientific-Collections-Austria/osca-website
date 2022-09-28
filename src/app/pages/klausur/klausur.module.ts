import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KlausurPage } from './klausur.page';
import { CountUpModule } from 'ngx-countup';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [KlausurPage],
  imports: [
    CountUpModule,
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
