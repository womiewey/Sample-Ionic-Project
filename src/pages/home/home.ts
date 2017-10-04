import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { Http, Headers, RequestOptions} from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RemoteServiceProvider]
})
export class HomePage {
  postList = "";
  array=[""];
  message:any;
  name:any;
  constructor(private remoteService : RemoteServiceProvider, public navctrl: NavController, public http: Http){
      
  }
load(){
      this.remoteService.loadusers().subscribe(
         
        data=>{
              this.postList="Message: " + data[1].mymessage;
              console.log(this.postList);
          },
          err => {
              console.log(err);
          },
          () => console.log('Done')
      );
  }
//   loop(){
//     this.remoteService.loadusers().subscribe(
//       data=>{
//             var i=0;
//             var x =data.length;
//             while(i<x){
//                 this.postList="Message: " + data[i].mymessage;
//                 this.array.push(this.postList);
//                 console.log(this.array[i]);
//                 i++; 
//             }
           
//         },
//         err => {
//             console.log(err);
//         },
//         () => console.log('Done')
//     );
// }
loop(){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  
  let data = {
      name: this.name,
      mymessage: this.message
  };

  this.http.post('http://127.0.0.1:8000/messages/', JSON.stringify(data), {headers: headers})
    .subscribe(res => {
        console.log(res.json());
    }, (err) => {
        console.log(err);
    });
}
}
