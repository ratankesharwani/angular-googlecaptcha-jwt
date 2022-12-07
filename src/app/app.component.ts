import { postdata } from './postdata';
import { Component, OnInit } from '@angular/core';
import { RecordService } from './record.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6LcCoTkjAAAAAKf6wRsMObLIqnKMmIaKcwDsVEcr"></re-captcha>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myArrayData=[];

  constructor(private myService  : RecordService) { }

  ngOnInit() {

    this.myService.postData().subscribe(
      (data: any) => {
            data = JSON.parse(data['_body']);
            console.log("data",data);
            this.myArrayData = data;
        },
        err => console.log(err), // error
        () => console.log('getData Complete') // complete
      );
  }
  title = 'angular-google-captcha';
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(captchaResponse.length !== 0)
    {
      //Add logic to send the create above JWT token to server so that user can perform update/insert operation.
      //by this was we can hold the user to update the score using external tool like postman
    }
  }
}
