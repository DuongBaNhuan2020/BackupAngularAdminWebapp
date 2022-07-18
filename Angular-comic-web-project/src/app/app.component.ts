import { Component, OnInit } from '@angular/core';
declare function ready(): any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-comic-web-project';

  ngOnInit(): void {
    ready();
  }

}
