import { Component, OnInit } from '@angular/core';
import {Chapter, User} from "../comic";
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "../comic.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = new User();
  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }
  create() {
    this.comicService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }
  onSubmit() {
    this.create();
  }
  gotoList() {
    this.router.navigate(['/users']);
  }

}
