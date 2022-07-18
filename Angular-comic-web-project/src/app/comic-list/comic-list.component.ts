import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "../comic.service";
import {Comic, Comment, Employee} from "../comic";



@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  comics:  Observable<any> | undefined;
  comicsSearch: Comic[] = [];
  comicsAll: Comic[] = [];
  searchTerm = '';

  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.comics = this.comicService.getComicsList();
    this.comicService.getComicsList().subscribe((comicsData: Comic[]) => {
      this.comicsAll = comicsData;
    });
  }
  deleteComic(id: number) {
    this.comicService.deleteComicByComicId(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  search(value: string): void {
    this.comicService.getComicsList().subscribe((comicsData: Comic[]) => {
      this.comicsAll = comicsData;
    });
    this.comicsSearch = this.comicsAll.filter((val) =>
      val.name?.toLowerCase().includes(value)
    );
  }
}
