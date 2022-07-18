import { Component, OnInit } from '@angular/core';
import {Chapter, Comic, Comment} from "../comic";
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "../comic.service";

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  comment: Comment | undefined;
  comic: Comic | undefined;
  chapter: Chapter | undefined;
  comic_id: number | undefined;
  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.comic_id=this.route.snapshot.params['id'];
    this.comicService.getCommentsByCommentId(this.route.snapshot.params['commentid']).subscribe(data => {
      console.log("day la du lieu"+data)
      this.comment = data;
    }, error => console.log(error));
    this.comicService.getComicByComicId(this.route.snapshot.params['id']).subscribe(data => {
      console.log("day la du lieu"+data)
      this.comic = data;
    }, error => console.log(error));
    this.comicService.getChaptersByChapterId(this.route.snapshot.params['chapterid']).subscribe(data => {
      console.log("day la du lieu"+data)
      this.chapter = data;
    }, error => console.log(error));
  }
  update() {
    this.comicService.updateCommentByComicIdChapterIdCommentIdUserId(this.route.snapshot.params['id'],this.route.snapshot.params['chapterid'],this.route.snapshot.params['commentid'],1,this.comment)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }
  onSubmit() {
    this.update();
  }
  gotoList() {
    this.reloadData();
    this.router.navigate(['/comics/comments/'+this.route.snapshot.params['id']+'/'+this.route.snapshot.params['chapterid']]);
  }

}
