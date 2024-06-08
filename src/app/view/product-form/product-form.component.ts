import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private formB: FormBuilder,
    private productService: ProductoService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formB.group({
      name: ['', Validators.required],
      code: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      status: [false, Validators.required],
    });
  }

  submit() {
    this.productService.addProduct(this.formGroup.value);
  }
}
