import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public postId = -1;
  constructor(private route:ActivatedRoute, private router:Router) {
    route.params.subscribe(                                   //observable
      params => {
        this.postId = parseInt(params['id']);

        if (isNaN(this.postId)) {
          this.router.navigateByUrl('/404', { skipLocationChange: true });
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
