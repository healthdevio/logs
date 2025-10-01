import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsOptional } from "class-validator";
import { PaginationQueryDto } from "./pagination-query.dto";

export class FilterEventDto extends PaginationQueryDto {
  @IsNotEmpty()
  objectId: string;

  @IsOptional()
  category: string;

  @Transform(({ value }) => value === "true")
  @IsBoolean()
  @IsOptional()
  isScheduling?: boolean
  // subCategory: string;
}
