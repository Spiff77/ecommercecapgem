import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Product} from '../model/product.model';
import {logMessages} from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product!: Product;

  constructor(private pService: ProductService,
              private aRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.aRoute.snapshot.paramMap.get('id') || ''

    if(id!=''){
      this.pService.findOne(+id).subscribe(p => this.product = p)
    }
  }

  deleteProduct(){
    this.pService.remove(this.product.id)
      .subscribe(() =>
        this.router.navigateByUrl('/products'))
  }

}
