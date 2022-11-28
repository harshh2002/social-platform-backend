import { Posts } from 'src/posts/posts.entity';
import { BaseEntity } from 'src/utils/entities/BaseEntity';
import { CreateUserCommand } from 'src/utils/interface/CreateUserCommand';
import { Column, OneToMany } from 'typeorm';

export class User extends BaseEntity {
  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  following: string[];

  @Column()
  followers: string[];

  @OneToMany(() => Posts, (post) => post.user)
  posts: Posts[];

  public static create(command: CreateUserCommand): User {
    const { email, password } = command;

    const user = new User();

    user.email = email;
    user.password = password;
    return user;
  }
}
