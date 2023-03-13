import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  //icons - fontawesome
  public faUser = faUser;
  public faNewspaper = faNewspaper;
  public faTimes = faTimes;
  public faPlus = faPlus;

  public postDate = new Date();

  constructor(private modalService: NgbModal) { }

  open_modal(content: any) {
    this.modalService.open(content);
  }
  ngOnInit(): void { }

}
