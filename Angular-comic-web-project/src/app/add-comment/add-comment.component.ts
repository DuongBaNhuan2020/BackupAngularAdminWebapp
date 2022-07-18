import { Component, OnInit } from '@angular/core';
import {Chapter, Comic, Comment} from "../comic";
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "../comic.service";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  comment: Comment = new Comment();
  comic: Comic | undefined;
  chapter: Chapter | undefined;
  comic_id: number | undefined;
  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) { }

  ngOnInit(): void {
    this.comment = new Comment();
    this.comic_id=this.route.snapshot.params['id'];
    this.comicService.getComicByComicId(this.route.snapshot.params['id']).subscribe(data => {
      console.log("day la du lieu"+data)
      this.comic = data;
    }, error => console.log(error));
    this.comicService.getChaptersByChapterId(this.route.snapshot.params['chapterid']).subscribe(data => {
      console.log("day la du lieu"+data)
      this.chapter = data;
    }, error => console.log(error));
  }
  create() {
    this.comicService.createCommentWithComicIdChapterIdUserId(this.route.snapshot.params['id'],this.route.snapshot.params['chapterid'],1,this.comment)
      .subscribe(data => console.log(data), error => console.log(error));
    this.comment = new Comment();
    this.gotoList();
  }
  onSubmit() {
    this.create();
  }
  gotoList() {
    this.router.navigate(['/comics/comments/'+this.route.snapshot.params['id']+'/'+this.route.snapshot.params['chapterid']]);
  }

}
