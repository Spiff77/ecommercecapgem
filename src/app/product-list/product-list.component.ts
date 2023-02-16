import { Component } from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct: Product | undefined;
  products: Product[] = [{
    id:20,
    name: 'Le produit 1',
    description: 'Desc du produit 1',
    active: true,
    price: 20,
    category: 'Diverse'
  },{
    id:21,
    name: 'Le produit 2',
    description: 'Desc du produit 2',
    active: true,
    price: 200,
    category: 'Diverse aussi'
  }]
  filterStr: string = '';

  receiveProductclicked(product: Product){
    this.selectedProduct = product;
  }

  getProductsFiltered(){
    return this.products.filter(p => p.name.includes(this.filterStr))
  }
}
