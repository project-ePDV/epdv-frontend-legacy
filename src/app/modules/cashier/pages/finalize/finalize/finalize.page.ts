import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.page.html',
  styleUrls: ['./finalize.page.scss']
})
export class FinalizePage implements OnInit {
  produtsList: any;
  totalPrice: any;

  constructor(
    private productService: ProductsService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.produtsList = this.productService.getProducts();
    console.log(this.produtsList);
    
    this.totalPrice = this.productService.totalPrice();
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
