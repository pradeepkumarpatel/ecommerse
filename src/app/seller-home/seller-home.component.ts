import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../appModels/addproduct.madel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  allProducts: Product[] | undefined;
  deletedProductsStatus = ''
 
  
  constructor(private productservice:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.showProducts()
    // this.showProductsMongoDB()
  }

  deletitem(id:number){
    this.productservice.deleteProduct(id).subscribe(delteddata => {
      this.deletedProductsStatus='Product deleted successfully'
      this.showProducts();
    })
  }

  showProducts(){
    this.productservice.getAllProducts().subscribe(productsdata => {
      this.allProducts = productsdata;
    })
  }
  showProductsMongoDB(){
    this.productservice.getAllProductsMongoDB().subscribe(productsdata => {
      this.allProducts = productsdata;
    })
  }
}
