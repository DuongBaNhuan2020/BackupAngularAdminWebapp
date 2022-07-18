import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Chapter, Comic, Comment, Like, User} from "../comic";
import {ComicService} from "../comic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usersAll: User[] = [];
  comicsAll: Comic[]=[];
  chaptersAll: Chapter[]=[];
  commentsAll: Comment[]=[];
  likesAll: Like[]=[];
  constructor(private comicService: ComicService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.comicService.getUsersList().subscribe((usersData: User[]) => {
      this.usersAll = usersData;
    });
    this.comicService.getComicsList().subscribe((comicsData: Comic[]) => {
      this.comicsAll = comicsData;
    });
    this.comicService.getChaptersList().subscribe((chaptersData: Chapter[]) => {
      this.chaptersAll = chaptersData;
    });
    this.comicService.getCommentList().subscribe((commentsData: Comment[]) => {
      this.commentsAll = commentsData;
    });
    this.comicService.getLikesList().subscribe((likesData: Like[]) => {
      this.likesAll = likesData;
    });
  }

}
