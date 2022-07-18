import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comic} from "./comic";

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private baseUrl = 'http://localhost:8080/api/v1/comics';
  private baseUrlChapter = 'http://localhost:8080/api/v1/chapters';
  private baseUrlUser = 'http://localhost:8080/api/v1/users';
  private baseUrlComment = 'http://localhost:8080/api/v1/comments';
  private baseUrlLike = 'http://localhost:8080/api/v1/likes';
  constructor(private http: HttpClient) {}
  // Comic
  createComic(comic: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, comic);
  }
  getComicsList():  Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  getComicByComicId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  deleteComicByComicId(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);

  }
  updateComicByComicId(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  // Chapter
  getChaptersList(): Observable<any> {
    return this.http.get(`${this.baseUrlChapter}`);
  }
  createChapterWithComicId(id: number,chapter: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/chapters/${id}`, chapter);
  }
  getChaptersByComicId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/chapters`);
  }
  getChaptersByChapterId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlChapter}/${id}`);
  }
  updateChapterByComicIdChapterId(id: number,chapterId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/chapters/${id}/${chapterId}`, value);
  }
  deleteChapterByChapterId(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlChapter}/${id}`);

  }
  // Comment
  getCommentList():  Observable<any>{
    return this.http.get(`${this.baseUrlComment}`);
  }
  getCommentsByCommentId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlComment}/${id}`);
  }
  getCommentsByComicIdChapterId(id: number,chapterId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/comments/${id}/${chapterId}`);

    }
  getCommentsByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrlUser}/${userId}/comments`);
  }
  updateCommentByComicIdChapterIdCommentIdUserId(id: number,chapterId: number,commentId: number,userId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/comments/${id}/${chapterId}/${commentId}/${userId}`, value);
  }
  createCommentWithComicIdChapterIdUserId(id: number,chapterId: number,userId: number,comment: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/comments/${id}/${chapterId}/${userId}`, comment);
  }
  deleteCommentByCommentId(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlComment}/${id}`);

  }
  //User
  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlUser}`, user);
  }
  getUsersByUserId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlUser}/${id}`);
  }
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrlUser}`);
  }
  updateUserByUserId(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlUser}/${id}`, value);
  }
  deleteUserByUserId(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlUser}/${id}`);

  }
  //Like
  getLikesList(): Observable<any> {
    return this.http.get(`${this.baseUrlLike}`);
  }
  createLikeWithComicIdUserId(id: number,userId: number,like: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/likes/${id}/${userId}`, like);
  }
  getLikesByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrlUser}/${userId}/likes`);
  }
  deleteLikeByLikeId(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlLike}/${id}`);

  }
}
