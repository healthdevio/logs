import { PaginationDto } from "../models/dto/pagination.dto";

export class PaginationHelper {
  static toDbQuery({ page = 1, size = 10 }: PaginationDto) {
    const take = size;
    const skip = (page - 1) * size;

    return { skip, take };
  }
}
