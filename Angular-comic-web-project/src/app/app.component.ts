import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "./comic.service";
declare function ready(): any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-comic-web-project';
  ngOnInit(): void {
    // ready();
  }
  constructor(public translate: TranslateService) {
    translate.addLangs(['English', 'Tiếng việt']);
    translate.setDefaultLang('English');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
