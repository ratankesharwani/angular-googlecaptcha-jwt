import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postdata } from './postdata';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  url = 'http://localhost:8080/authenticate';

  constructor(private myHtpClient: HttpClient) {}

  // postData()
  // {
  //   return this.myHtpClient.get('http://localhost:2303/');
  //   //for proxy configuration
  //   //return this.myHtpClient.get('/api');
  // }

  postData() {
    return this.myHtpClient.post<postdata>(this.url, {
      username: 'siddhuname',
      gameid: '1',
      sid: '1234567890',
      userid: 'siddhuid',
      score: '500',
    });
  }
}
