import { IsNotEmpty, IsOptional } from "class-validator";
import { PaginationQueryDto } from "./pagination-query.dto";

export class FilterEventDto extends PaginationQueryDto {
  @IsNotEmpty()
  objectId: string;

  @IsOptional()
  category: string;
  // subCategory: string;
}
