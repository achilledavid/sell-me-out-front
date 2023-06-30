import { product } from './product';

export interface order {
  id: string;
  date: Date;
  total_price: number;
  products?: product[];
  user_id: number;
}
