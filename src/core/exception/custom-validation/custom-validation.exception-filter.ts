import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomValidationException } from './custom-validation.exception';

@Catch(CustomValidationException)
export class CustomValidaitonExceptionFilter implements ExceptionFilter {
  catch(exception: CustomValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const { message, status, statusCode, trackId } = exception;
    response.status(exception.status).json({
      message,
      status,
      statusCode,
      trackId,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
