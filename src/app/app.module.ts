import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebShellModule } from '@shell/web-shell.module';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { CountUpModule } from 'ngx-countup';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
// import { ChartsModule } from 'ng2-charts';

import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
// import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollToTopComponent
  ],
  imports: [
            BrowserModule,
            CoreModule,
            WebShellModule,
            CountUpModule,
            NgxPageScrollModule,
            NgxPageScrollCoreModule
          ],
  bootstrap: [AppComponent],
})
export class AppModule {}
