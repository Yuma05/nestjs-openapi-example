import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { error as validatorErrors } from 'express-openapi-validator';

interface ValidationError {
  status: number;
  message: string;
  errors: Array<{
    path: string;
    message: string;
    error_code?: string;
  }>;
  path?: string;
  name: string;
  headers: {
    [header: string]: string;
  };
}

@Catch(Error)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (this.isValidationError(error)) {
      const validatorError = error as ValidationError;
      const errorResponse = {
        errors: validatorError.errors,
      };
      response.status(HttpStatus.BAD_REQUEST).json(errorResponse);
    }
  }

  private isValidationError(error: Error): boolean {
    return Object.values(validatorErrors).some(
      (validatorError) => error instanceof validatorError,
    );
  }
}
