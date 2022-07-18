import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Comic, User} from "../comic";
import {ComicService} from "../comic.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit {
  users: Observable<User[]> | undefined;
  usersSearch: User[] = [];
  usersAll: User[] = [];
  searchTerm = '';

  constructor(private comicService: ComicService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.comicService.getUsersList();
    this.comicService.getUsersList().subscribe((usersData: User[]) => {
      this.usersAll = usersData;
    });
  }
  search(value: string): void {
    this.comicService.getUsersList().subscribe((usersData: User[]) => {
      this.usersAll = usersData;
    });
    this.usersSearch = this.usersAll.filter((val) =>
      val.name?.toLowerCase().includes(value)
    );
  }
  deleteUser(id: number) {
    this.comicService.deleteUserByUserId(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
