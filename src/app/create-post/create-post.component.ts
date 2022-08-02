import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../models/post.Post';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public newPost: Post = new Post();

  commentsForm = FormGroup;

  constructor(private transactionService: TransactionService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public createPost() {
    this.transactionService.createPost(this.newPost).subscribe(data => {
      this.newPost = data;
    }
    , error => console.log(error));
  }

  public addCommentComponent() {

  }

  public getAllPosts() {
    // redirect to home page
    this.router.navigate(['/home']);
  }

  public onSubmit() {
    this.createPost();
    this.getAllPosts();
  }


}
