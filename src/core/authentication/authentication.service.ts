import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Decoded } from './decoded';

@Injectable()
export class AuthenticationService {
  constructor(@Inject(REQUEST) private request: Request) {}
  private jwt = new JwtService({ secret: process.env.SECRET_KEY });

  public decodeByRequest(request = this.request): Decoded {
    const authorization = (request.headers.authorization ||
      request.query.token) as string;
    if (!authorization) {
      throw new HttpException(
        { message: ['Token não autorizado'] },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const token = authorization.replace('Bearer ', '').trim();

    const decoded = this.jwt.decode(token) as Decoded;

    return decoded;
  }

  public getToken() {
    return (
      this.request.headers['authorization'] ||
      this.request.query['authorization']
    );
  }
}
