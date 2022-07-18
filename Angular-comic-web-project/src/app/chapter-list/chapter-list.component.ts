import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Chapter, Comic} from "../comic";
import {ComicService} from "../comic.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  chapters: Observable<Chapter[]> | undefined;
  chapter: Observable<Chapter> | undefined;
  comic: Comic | undefined;
  comic_id: number | undefined;
  comment_number: number | undefined;
  chaptersSearch: Chapter[] = [];
  chaptersAll: Chapter[] = [];
  searchTerm = '';
  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
    this.comicService.getComicByComicId(this.route.snapshot.params['id']).subscribe(data => {
      console.log("day la du lieu"+data)
      this.comic = data;
    }, error => console.log(error));
  }

  reloadData() {
    this.comic_id=this.route.snapshot.params['id'];
    this.chapters = this.comicService.getChaptersByComicId(this.route.snapshot.params['id']);
    this.comicService.getChaptersByComicId(this.route.snapshot.params['id']).subscribe((chaptersData: Chapter[]) => {
      this.chaptersAll = chaptersData;
    });
  }
  search(value: string): void {
    this.comicService.getChaptersByComicId(this.route.snapshot.params['id']).subscribe((chaptersData: Chapter[]) => {
      this.chaptersAll = chaptersData;
    });
    this.chaptersSearch = this.chaptersAll.filter((val) =>
      val.name?.toLowerCase().includes(value)
    );
  }
  deleteChapter(id: number) {
    this.comicService.deleteChapterByChapterId(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
