import { Component, OnInit } from '@angular/core';
import {Chapter, Comic} from "../comic";
import {ComicService} from "../comic.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {
  chapter: Chapter = new Chapter();
  comic: Comic | undefined;
  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) { }

  ngOnInit(): void {
    this.chapter = new Chapter();
    this.comicService.getComicByComicId(this.route.snapshot.params['id']).subscribe(data => {
      console.log("day la du lieu"+data)
      this.comic = data;
    }, error => console.log(error));
  }
  create() {
    this.comicService.createChapterWithComicId(this.route.snapshot.params['id'],this.chapter)
      .subscribe(data => console.log(data), error => console.log(error));
    this.chapter = new Chapter();
    this.gotoList();
  }
  onSubmit() {
    this.create();
  }
  gotoList() {
    this.router.navigate(['/comics/'+this.route.snapshot.params['id']+'/chapters']);
  }
}
