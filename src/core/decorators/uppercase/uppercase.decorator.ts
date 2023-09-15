import { applyDecorators } from "@nestjs/common";
import { Transform } from "class-transformer";

export function UpperCase() {
  return applyDecorators(
    Transform(({ value }) => String(value || "").toUpperCase())
  );
}
