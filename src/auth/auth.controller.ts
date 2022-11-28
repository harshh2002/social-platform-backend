import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserCommand } from 'src/utils/interface/CreateUserCommand';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() command: CreateUserCommand) {
    return this.authService.login(command);
  }
}
