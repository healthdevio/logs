import { IsIn, IsNotEmpty, IsOptional, IsUUID } from "class-validator";
import { Stringfy } from "src/core/decorators/stringfy/stringfy.decorator";
import { UpperCase } from "src/core/decorators/uppercase/uppercase.decorator";
import { Sources } from "src/core/enums/sources";

export class CreateEventDto {
  @IsNotEmpty()
  @UpperCase()
  description: string;

  @IsOptional()
  userPersonName?: string;

  @IsOptional()
  username?: string;

  @IsNotEmpty()
  category: string;
  subCategory: string;

  @IsOptional()
  @IsIn(Object.values(Sources))
  source: string;

  @Stringfy()
  customData: string;

  @IsNotEmpty()
  @IsUUID()
  objectId: string;
  action: string;
}
