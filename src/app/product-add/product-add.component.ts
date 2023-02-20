import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {SupplierService} from '../supplier.service';
import {Supplier} from '../model/supplier.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{
  myForm!: FormGroup;

  formSubmitted = false;

  suppliers: Supplier[] = []

  constructor(private fb: FormBuilder,
              private pService: ProductService,
              private sService: SupplierService,
              private router: Router,
              ) {
  }

  ngOnInit(): void {
    this.myForm =   this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      category: 'lkqjsdfljkdsqfjklqfdljkljk',
      description: '',
      price: 0,
      promo: 0,
      active: true,
      supplier: this.fb.group({
        id: ['',Validators.required]
      })
    })

    this.sService.findAll().subscribe(s => {
      this.suppliers = s
      if(s.length > 0)
        this.myForm.get('supplier')?.get('id')?.setValue(s[0].id)
    })
  }


  submitForm() {
    this.formSubmitted = true;
    if(this.myForm.valid){
        this.pService.add(this.myForm.value)
          .subscribe(p => this.router.navigateByUrl('/products'))
      }
    }
}
