import {Supplier} from './supplier.model';

export interface Product {
  id: number,
  active: boolean,
  price: number,
  name:string,
  category: string,
  description: string,
  supplier: Supplier
}
