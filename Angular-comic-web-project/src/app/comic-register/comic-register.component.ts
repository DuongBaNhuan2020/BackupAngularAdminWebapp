import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-comic-register',
  templateUrl: './comic-register.component.html',
  styleUrls: ['./comic-register.component.css']
})
export class ComicRegisterComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['English', 'Tiếng việt']);
    translate.setDefaultLang('English');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit(): void {
  }

}
