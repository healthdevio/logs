/* eslint-disable prettier/prettier */
import { Expose, Transform } from 'class-transformer';
import { IsInt, IsNumber, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @Expose()
  @Transform((event) => {
    if (!event.value) {
      return 1;
    }
    const number = Number(event.value);
    if (isNaN(number)) {
      return String('Invalid field');
    }

    return number;
  })
  @IsNumber()
  @IsInt()
  @IsPositive()
  page: number;

  @Expose()
  @Transform((event) => {
    if (!event.value) {
      return 10;
    }
    const number = Number(event.value);
    if (isNaN(number)) {
      return String('Invalid field');
    }

    return number;
  })
  @IsNumber()
  @IsInt()
  @IsPositive()
  size: number;
}
