import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicListRoutingModule } from './comic-list/comic-list-routing.module';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComicComponent } from './edit-comic/edit-comic.component';
import { AddComicComponent } from './add-comic/add-comic.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { EditChapterComponent } from './edit-chapter/edit-chapter.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import {HttpClientModule} from "@angular/common/http";
import { EmployeesComponent } from './employees/employees.component';
import {FormsModule} from "@angular/forms";
import { SearchByNamePipe } from './search-by-name.pipe';
import { ComicLoginComponent } from './comic-login/comic-login.component';
import { ComicRegisterComponent } from './comic-register/comic-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    ChapterListComponent,
    CommentListComponent,
    UserListComponent,
    AdminListComponent,
    DashboardComponent,
    EditComicComponent,
    AddComicComponent,
    EditCommentComponent,
    AddCommentComponent,
    AddChapterComponent,
    EditChapterComponent,
    AddUserComponent,
    EditUserComponent,
    AddAdminComponent,
    EditAdminComponent,
    EmployeesComponent,
    SearchByNamePipe,
    ComicLoginComponent,
    ComicRegisterComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComicListRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
