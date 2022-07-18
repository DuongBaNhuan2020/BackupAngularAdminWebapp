import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Chapter, Comic, Comment} from "../comic";
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "../comic.service";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: Observable<Comment[]> | undefined;
  comic: Comic | undefined;
  chapter: Chapter | undefined;
  comic_id: number | undefined;
  chapter_id: number | undefined;
  commentsSearch: Comic[] = [];
  commentsAll: Comic[] = [];
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
    this.comicService.getChaptersByChapterId(this.route.snapshot.params['chapterid']).subscribe(data => {
      console.log("day la du lieu"+data)
      this.chapter = data;
    }, error => console.log(error));
  }

  reloadData() {
    this.comic_id=this.route.snapshot.params['id'];
    this.chapter_id=this.route.snapshot.params['chapterid'];
    this.comments = this.comicService.getCommentsByComicIdChapterId(this.route.snapshot.params['id'],this.route.snapshot.params['chapterid']);
    this.comicService.getCommentsByComicIdChapterId(this.route.snapshot.params['id'],this.route.snapshot.params['chapterid']).subscribe((commentsData:  Comic[]) => {
      this.commentsAll = commentsData;
    });
  }
  search(value: string): void {
    this.comicService.getCommentsByComicIdChapterId(this.route.snapshot.params['id'],this.route.snapshot.params['chapterid']).subscribe((commentsData:  Comic[]) => {
      this.commentsAll = commentsData;
    });
    this.commentsSearch = this.commentsAll.filter((val) =>
      val.name?.toLowerCase().includes(value)
    );
  }
  deleteComment(id: number) {
    this.comicService.deleteCommentByCommentId(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
