import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsFeedService } from 'src/app/Services/news-feed.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post:any;
  constructor(private newsFeedSrv: NewsFeedService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param=>{
      
      this.getPostDetails(param.get('id'))
    })
  }
  getPostDetails(id:any) {
    
    this.newsFeedSrv.getJSON().subscribe(res=>{
      console.log(res);
      let post = res.posts?.find((element:any) => {
        return  element.id == id
      });
      if (post) {
        this.post = {...post}
      }
    })
  }

}
