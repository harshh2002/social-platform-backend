import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserCommand } from 'src/utils/interface/CreateUserCommand';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(command: CreateUserCommand): Promise<User> {
    const { email } = command;
    const checkUser = await this.userRepository.findOne({
      where: { email: email },
    });
    if (checkUser) {
      throw new Error('User already exists');
    }

    const user = User.create(command);
    await this.userRepository.save(user);
    return user;
  }
  async findByEmail(email: string): Promise<User> {
    try {
      return await this.userRepository.findOne({
        where: { email: email },
      });
    } catch (err) {
      throw err;
    }
  }
}
