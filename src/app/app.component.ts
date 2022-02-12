import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) {}
  
  ngOnInit() {
    this.spinner.show();


    setTimeout(() => {
      /** spinner ends after 4 seconds */
      this.spinner.hide();
    }, 4000);
  }
  title = 'news-feed';



}
