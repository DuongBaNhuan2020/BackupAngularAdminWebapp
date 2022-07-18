import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Chapter, Comment, Like, User} from "../comic";
import {ComicService} from "../comic.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  comments: Observable<Comment[]> | undefined;
  likes: Observable<Like[]> | undefined;
  user: User | undefined;

  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.comicService.getUsersByUserId(this.route.snapshot.params['userId']).subscribe(data => {
      console.log("day la du lieu"+data)
      this.user = data;
    }, error => console.log(error));
    this.comments= this.comicService.getCommentsByUserId(this.route.snapshot.params['userId']);
    this.likes= this.comicService.getLikesByUserId(this.route.snapshot.params['userId']);
  }
  update() {
    this.comicService.updateUserByUserId(this.route.snapshot.params['userId'],this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }
  onSubmit() {
    this.update();
  }

  gotoList() {
    this.reloadData();
    this.router.navigate(['/users']);
  }
  deleteComment(id: number) {
    this.comicService.deleteCommentByCommentId(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  deleteLike(id: number) {
    this.comicService.deleteLikeByLikeId(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
