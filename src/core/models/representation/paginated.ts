export interface Paginated<T = any> {
  rows: T[];
  total: number;
}
