import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { CreateUserCommand } from 'src/utils/interface/CreateUserCommand';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(command: CreateUserCommand): Promise<any> {
    const { email, password } = command;
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const passwordsMatch = await compare(password, user.password);
      if (passwordsMatch) {
        const { ...result } = user;
        return result;
      }
      throw new HttpException('Password incorrect', HttpStatus.UNAUTHORIZED);
    }
    throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
  }

  async login(command: CreateUserCommand): Promise<any> {
    const { email, password } = command;
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const passwordsMatch = await compare(password, user.password);
      if (passwordsMatch) {
        const payload = { email: user.email, sub: user.id };
        return { access_token: this.jwtService.sign(payload) };
      }
      throw new HttpException('Password incorrect', HttpStatus.UNAUTHORIZED);
    }
    throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
  }
}
