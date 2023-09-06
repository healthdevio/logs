import { HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';

export class CustomValidationException extends Error {
  public status: HttpStatus;
  public message: string;
  public statusCode: string;
  public trackId: string;
  constructor(message: string, errorStatus?: HttpStatus, statusCode?: string) {
    super(message);
    this.message = message;
    this.status = errorStatus || HttpStatus.BAD_REQUEST;
    this.statusCode = statusCode;
    this.trackId = randomUUID();
  }
}
