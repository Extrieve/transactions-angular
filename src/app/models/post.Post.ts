import { Comment } from './comment.Comment';

export class Post {

  postId!: number;
  title!: string;
  content!: string;
  author!: string;
  createdAt!: string;
  comments!: Comment[];
}
