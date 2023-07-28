import { Component, OnInit } from '@angular/core';
import { Product } from '../appModels/addproduct.madel';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  productAddStatus:string=''
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
  }
  addProducts(data: Product) {
    this.productservice.addNewProduct(data).subscribe(prductdata => {
      this.productAddStatus = 'Product Successully Added';
    })
  }

  addProductsMongoDB(data: Product) {
    this.productservice.addNewProductMongoDB(data).subscribe(prductdataMongo => {
      this.productAddStatus = 'Product Successully Added';
    })
  }
}
