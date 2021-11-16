import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecaptchaModule } from 'ng-recaptcha';

import { RecordService } from './record.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaModule,
    HttpClientModule,
  ],
  providers: [
    RecordService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
