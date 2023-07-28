import { Component, OnInit } from '@angular/core';
import { Product } from '../appModels/addproduct.madel';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: Product | undefined
  updateProductStatus:string =''
  constructor(private productservice: ProductService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    let productID = this.routes.snapshot.paramMap.get('id');
    this.productservice.getSingleProduct(productID).subscribe((productitem: Product) => {
      if (productitem != undefined)
        this.productData = productitem;
    })
  }
  updateOldProducts(updateData: Product) {
    if(this.productData){
      updateData.id = this.productData.id
    }
    this.productservice.updateProduct(updateData).subscribe((productitem: Product) => {
      this.updateProductStatus = "Product successfully updated"
    })
  }
}
