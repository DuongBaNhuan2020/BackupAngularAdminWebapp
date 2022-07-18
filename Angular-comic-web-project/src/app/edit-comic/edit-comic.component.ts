import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Comic, Comment} from "../comic";
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "../comic.service";

@Component({
  selector: 'app-edit-comic',
  templateUrl: './edit-comic.component.html',
  styleUrls: ['./edit-comic.component.css']
})
export class EditComicComponent implements OnInit {
  comic: Comic | undefined;
  options = [
    { name: "Danh mục 1", value: "Danh mục 1" },
    { name: "Danh mục 2", value: "Danh mục 2" }
  ]
  constructor(private route: ActivatedRoute,private comicService: ComicService,
    private router: Router) {
  }

  ngOnInit() {

    this.reloadData();
  }

  reloadData() {
   this.comicService.getComicByComicId(this.route.snapshot.params['id']).subscribe(data => {
     console.log("day la du lieu"+data)
     this.comic = data;
   }, error => console.log(error));
  }
  update() {
    this.comicService.updateComicByComicId(this.route.snapshot.params['id'],this.comic)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }
  onSubmit() {
    this.update();
  }

  gotoList() {
    this.reloadData();
    this.router.navigate(['/comics']);
  }
}
