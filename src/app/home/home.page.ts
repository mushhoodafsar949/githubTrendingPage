import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../Services/github-service.service';
import repos from './repos';
import { Observable } from 'rxjs';
import Repos from './repos';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //repos: any;
rest: any;
 data  = '';
 data1 = '';

 name: any;
 submit: any;
  constructor(private githubservice: GithubServiceService) {
this.submit=false;
  }
  //*ngFor="let hero of heroes; let i = index"
  ngOnInit() {
    fetch('https://gh-trending-api.herokuapp.com/repositories')
    .then((response) => response.json()
    ).then((myJson)=>{
      this.data=myJson;
      console.log(this.data);
    });

    fetch('https://gh-trending-api.herokuapp.com/developers')
    .then((response) => response.json()
    ).then((myJson)=>{
      this.data1=myJson;
      console.log(this.data1);
    });

  }

  repo(){
this.submit=false;
  }

  dev(){
    this.submit=true;
  }

}
