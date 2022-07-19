import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-comic-login',
  templateUrl: './comic-login.component.html',
  styleUrls: ['./comic-login.component.css']
})
export class ComicLoginComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(public translate: TranslateService) {
    translate.addLangs(['English', 'Tiếng việt']);
    translate.setDefaultLang('English');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
