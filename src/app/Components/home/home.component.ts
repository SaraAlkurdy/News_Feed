import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from 'src/app/Services/news-feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts = new Array;
  // posts: any[] = [];
  show = false;
  indexPost: number | undefined;

  constructor(private newsFeedSrv: NewsFeedService) { }

  ngOnInit(): void {
    this.getNewsFeed()
  }

  getNewsFeed() {
    this.newsFeedSrv.getJSON().subscribe(res => {
      this.posts = res.posts;
      this.posts.forEach(e=>e['show']=false)
      console.log(this.posts);
      
    })
  }
  changeStatus(index:number){
    this.posts[index].show = !this.posts[index].show;
    this.indexPost = index;
  }

}
