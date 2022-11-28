import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserCommand } from 'src/utils/interface/CreateUserCommand';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  async create(@Body() command: CreateUserCommand) {
    return this.userService.create(command);
  }
}
