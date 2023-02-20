import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../product.service';
import {HttpClient} from '@angular/common/http';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  selectedProduct: Product | undefined;
  products: Product[] = [];
  filterStr: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.findAll()
      .subscribe(prods => this.products = prods)
  }

  receiveProductclicked(product: Product){
    this.selectedProduct = product;
  }

  getProductsFiltered(){
    return this.products.filter(p => p.name.includes(this.filterStr))
  }

}
