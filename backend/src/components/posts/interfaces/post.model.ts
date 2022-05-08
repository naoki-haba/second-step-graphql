import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  // GraphQL Schemaのためのデコレータ
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  title: string;
}
