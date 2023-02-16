import { Component } from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct: Product | undefined;

  product1: Product = {
    id:20,
    name: 'Le produit 1',
    description: 'Desc du produit 1',
    active: true,
    price: 20,
    category: 'Diverse'
  }

  product2: Product = {
    id:21,
    name: 'Le produit 2',
    description: 'Desc du produit 2',
    active: true,
    price: 200,
    category: 'Diverse aussi'
  }

  receiveProductclicked(product: Product){
    this.selectedProduct = product;

  }
}
