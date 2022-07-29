import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.Post';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: Post[] = [];
  public comments: Comment[] = [];
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  public getAllPosts() {
    this.transactionService.getAllPosts().subscribe(data => {
      this.posts = data;
    }, error => console.log(error));
  }

}
