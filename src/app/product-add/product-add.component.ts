import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private pService: ProductService,
              private router: Router
              ) {
  }

  ngOnInit(): void {
    this.myForm =   this.fb.group({
      name: '',
      category: '',
      description: '',
      price: 0,
      promo: 0,
      active: true
    })
  }


  submitForm() {
    this.pService.add(this.myForm.value)
      .subscribe(p => this.router.navigateByUrl('/products'))
  }
}
