import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComicListComponent} from "./comic-list/comic-list.component";
import {ChapterListComponent} from "./chapter-list/chapter-list.component";
import {CommentListComponent} from "./comment-list/comment-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminListComponent} from "./admin-list/admin-list.component";
import {UserListComponent} from "./user-list/user-list.component";
import {EditComicComponent} from "./edit-comic/edit-comic.component";
import {AddComicComponent} from "./add-comic/add-comic.component";
import {AddChapterComponent} from "./add-chapter/add-chapter.component";
import {EditChapterComponent} from "./edit-chapter/edit-chapter.component";
import {AddCommentComponent} from "./add-comment/add-comment.component";
import {EditCommentComponent} from "./edit-comment/edit-comment.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {AddAdminComponent} from "./add-admin/add-admin.component";
import {EditAdminComponent} from "./edit-admin/edit-admin.component";
import {EmployeesComponent} from "./employees/employees.component";
import {ComicLoginComponent} from "./comic-login/comic-login.component";
import {ComicRegisterComponent} from "./comic-register/comic-register.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'comics', component: ComicListComponent},
  { path: 'comics/:id/chapters', component: ChapterListComponent},
  { path: 'comics/comments/:id/:chapterid', component: CommentListComponent},
  { path: 'users', component: UserListComponent},
  { path: 'admins', component: AdminListComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'comic-login', component: ComicLoginComponent},
  { path: 'comic-register', component: ComicRegisterComponent},

  { path: 'edit-comic/:id', component: EditComicComponent},
  { path: 'add-comic', component: AddComicComponent},

  { path: 'add-chapter/:id', component: AddChapterComponent},
  { path: 'edit-chapter/:id/:chapterid', component: EditChapterComponent},

  { path: 'add-comment/:id/:chapterid', component: AddCommentComponent},
  { path: 'edit-comment/:id/:chapterid/:commentid', component: EditCommentComponent},

  { path: 'add-user', component: AddUserComponent},
  { path: 'edit-user/:userId', component: EditUserComponent},

  { path: 'add-admin', component: AddAdminComponent},
  { path: 'edit-admin', component: EditAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
