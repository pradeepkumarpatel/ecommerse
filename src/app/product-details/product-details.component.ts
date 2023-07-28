import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../appModels/addproduct.madel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private productservice: ProductService) { }
  productData: undefined | Product
  ngOnInit(): void {
    let productID = this.activeRoute.snapshot.paramMap.get('produntId');
    productID && this.productservice.getSingleProduct(productID).subscribe(productitem => {
      this.productData = productitem;
    })
  }
}
