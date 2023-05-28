import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterProduct } from '../../models/registerProduct.model';
import { StorageService } from '../../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsModel } from 'src/app/modules/shared/models/products.model';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.page.html',
  styleUrls: ['./register-product.page.scss']
})
export class RegisterProductPage implements OnInit {
  registerForm!: FormGroup;
  registerError = false;
  submitted = false;
  isLoading = false;
  id!: number;
  title = 'Cadastrar';

  constructor(
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      amount: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })

    this.activeRoute.url.subscribe((segment) => {
      segment[1] && this.updatePage(parseInt(segment[1].path));
    });
  }

  get name() {
    return this.registerForm.get('name')
  }

  get amount() {
    return this.registerForm.get('amount');
  }

  get brand() {
    return this.registerForm.get('brand');
  }

  get price() {
    return this.registerForm.get('price');
  }

  submitValidationRequired(field: string) {
    return this.registerForm.get(field)?.errors?.['required'] && this.submitted;
  }

  updatePage(id: number) {
    this.id = id;
    this.title = 'Atualizar';

    this.storageService.getProductById(id).subscribe((t) => {
      this.registerForm.get('name')?.setValue(t.records[0].name);
      this.registerForm.get('amount')?.setValue(t.records[0].amount);
      this.registerForm.get('brand')?.setValue(t.records[0].brand);
      this.registerForm.get('price')?.setValue(t.records[0].price);
    })
  }

  onSubmit() {
    this.registerError = false;
    this.submitted = true;
    this.isLoading = true;

    const product = new RegisterProduct(
      this.name?.value,
      this.amount?.value,
      this.brand?.value,
      this.price?.value
    );

    if (this.registerForm.valid) {
      this.title == 'Cadastrar'
        && this.storageService.registerProduct(product).subscribe({
          complete: () => {
            this.router.navigate(['/estoque']);
          },
          error: (e) => {
            this.registerError = true;
            this.isLoading = false;
          }
        });

      this.title == 'Atualizar'
        && this.storageService.updateProduct(this.id, product).subscribe({
          complete: () => {
            this.router.navigate(['/estoque']);
          },
          error: (e) => {
            this.registerError = true;
            this.isLoading = false;
          }
        });

    } else {
      this.registerError = true;
      this.isLoading = false;
    }
  }
}
