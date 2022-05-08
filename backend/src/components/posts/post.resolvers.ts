import { Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';

// PostModelに相当するスキーマを返すことを宣言
@Resolver((of) => PostModel)
export class PostsResolver {
  constructor() {}

  // postsというクエリが呼ばれたらこのメソッドを実行する
  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is so good',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }
}
