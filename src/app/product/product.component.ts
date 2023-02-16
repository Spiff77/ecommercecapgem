import {Component, HostListener, Input} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product!:Product;

  @HostListener('click')
  clickOnCompo(){
    console.log("Hello world")
  }

}
