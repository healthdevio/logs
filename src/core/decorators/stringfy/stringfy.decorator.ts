import { applyDecorators } from "@nestjs/common";
import { Transform } from "class-transformer";

export function Stringfy() {
  return applyDecorators(
    Transform(({ value }) => {
      return typeof value
        ? value === "string"
          ? value
          : JSON.stringify(value)
        : null;
    })
  );
}
