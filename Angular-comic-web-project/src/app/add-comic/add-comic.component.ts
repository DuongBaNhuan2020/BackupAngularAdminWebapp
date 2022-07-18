import { Component, OnInit } from '@angular/core';
import {ComicService} from "../comic.service";
import {Comic} from "../comic";
import {Router} from "@angular/router";
import {Observable} from "rxjs";


@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.css']
})
export class AddComicComponent implements OnInit {
  comic: Comic = new Comic();
  comics: Observable<Comic[]> | undefined;
  options = [
    { name: "Danh mục 1", value: "Danh mục 1" },
    { name: "Danh mục 2", value: "Danh mục 2" }
  ]
  constructor(private comicService: ComicService,
              private router: Router) { }

  ngOnInit(): void {
    this.comic = new Comic();
  }
  reloadData() {
    this.comics = this.comicService.getComicsList();
  }
  create() {
    this.comicService.createComic(this.comic)
      .subscribe(data => console.log(data), error => console.log(error));
    this.comic = new Comic();
    this.gotoList();
  }
  onSubmit() {
    this.create();
  }
  gotoList() {
    this.reloadData();
    this.router.navigate(['/comics']);
  }
}
