import { Component, OnInit } from '@angular/core';
import {Chapter, Comic} from "../comic";
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "../comic.service";

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.css']
})
export class EditChapterComponent implements OnInit {
  chapter: Chapter | undefined;
  comic: Comic | undefined;
  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
    this.comicService.getComicByComicId(this.route.snapshot.params['id']).subscribe(data => {
      console.log("day la du lieu"+data)
      this.comic = data;
    }, error => console.log(error));
  }
  reloadData() {
    this.comicService.getChaptersByChapterId(this.route.snapshot.params['chapterid']).subscribe(data => {
      console.log("day la du lieu"+data)
      // data.valueOf().date_created=this.formatDate(data.valueOf().date_created)
      this.chapter = data;
    }, error => console.log(error));
  }
  update() {
    this.comicService.updateChapterByComicIdChapterId(this.route.snapshot.params['id'],this.route.snapshot.params['chapterid'],this.chapter)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }
  onSubmit() {
    this.update();
  }

  gotoList() {
    this.reloadData();
    this.router.navigate(['/comics/'+this.route.snapshot.params['id']+'/chapters']);
  }
  formatDate(value: string): string {
    var dateString = ("\/Date("+value+")\\/").substr(6);
    var currentTime = new Date(parseInt(dateString ));
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var date = day + "/" + month + "/" + year;
    // alert(date);
    return date;
  }
}
