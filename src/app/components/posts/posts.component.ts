import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  //icons - fontawesome
  public faUser = faUser;
  public faNewspaper = faNewspaper;

  public postDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
