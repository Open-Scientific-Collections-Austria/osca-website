import { Component, OnInit } from '@angular/core';
import { ThemeList, ThemeService } from '@core/services/theme';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { CountUpModule } from 'ngx-countup';


@Component({
  templateUrl: './klausur.page.html',
  styleUrls: ['./klausur.page.css'],
})
export class KlausurPage implements OnInit {
  path = ROUTER_UTILS.config;
  theme = ThemeList;


  constructor(private themeService: ThemeService) {}

  onClickChangeTheme(theme: ThemeList): void {
    this.themeService.setTheme(theme);
  }



  ngOnInit(): void {}

}
