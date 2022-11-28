import { User } from 'src/users/users.entity';
import { BaseEntity } from 'src/utils/entities/BaseEntity';
import { Column, ManyToOne } from 'typeorm';

export class Posts extends BaseEntity {
  @Column({ nullable: false })
  userId: string;
  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column()
  likes: string[];

  @Column()
  unlikes: string[];
}
