import { Component, OnInit } from '@angular/core';
import {Chapter, User} from "../comic";
import {ActivatedRoute, Router} from "@angular/router";
import {ComicService} from "../comic.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = new User();
  usersAll: User[] = [];
  constructor(private route: ActivatedRoute,private comicService: ComicService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.loadUsersAll();
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
  public validate(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
        }
      return;
      }
    }

    loadUsersAll(){
      this.comicService.getUsersList().subscribe((usersData: User[]) => {this.usersAll = usersData; });
    }
    contain(val: string): boolean {
      let isContain=false;
      for (let value of this.usersAll.values()) {
        if (value.name?.includes(val)){
          isContain=true;
        }
      }
      // alert(isContain)
      return isContain;
}
}
