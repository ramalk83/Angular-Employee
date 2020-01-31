import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {ApiService} from '../api.service';
import {Db} from '../shared/db';
//import {baseURL} from '../assets/baseurl';


@Component({
  selector: 'app-api-json',
  templateUrl: './api-json.component.html',
  styleUrls: ['./api-json.component.css']
})

export class ApiJsonComponent implements OnInit {

  title = 'Anglar - JSON example ';
  myData: Db[];
  myparam:Db;
  myparamname:Db;

constructor (private apiService: ApiService,
 @Inject('BaseURL') private BaseURL) { }


 ngOnInit (){
   this.apiService.getPosts()
   .subscribe((myData)=> this.myData =myData);
  this.apiService.getParamtype()
  .subscribe((myparam=>this.myparam=myparam))
  this.apiService.getParamname()
  .subscribe((myparamname=>this.myparamname=myparamname))
   }
}



  