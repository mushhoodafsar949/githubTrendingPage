import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  private baseURL= 'https://gh-trending-api.herokuapp.com/repositories';
  constructor(private http: HttpClient) { }

  getRepos(){
    return this.http.get(this.baseURL).toPromise();
  }

}
