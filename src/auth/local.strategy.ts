import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserCommand } from 'src/utils/interface/CreateUserCommand';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({});
  }

  async validate(command: CreateUserCommand): Promise<any> {
    const user = await this.authService.validateUser(command);
    if (!user) {
      throw new HttpException(
        'Username or Password are incorrect',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }
}
