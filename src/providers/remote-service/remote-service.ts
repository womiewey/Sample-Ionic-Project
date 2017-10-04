import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  static get parameters() {
    return [[Http]];
}
  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }
  loadusers(){
    var url = "http://127.0.0.1:8000/messages/";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
