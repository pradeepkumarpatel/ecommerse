import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../appModels/addproduct.madel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
//Add products on JSON server
  addNewProduct(product: Product){
    return this.http.post('http://localhost:3000/product', product);
  }
  //Add products on MongoDB database
  addNewProductMongoDB(product: Product){
    return this.http.post('http://localhost:4000/seller-add-product', product);
  }
//Get all products from JSON server
  getAllProducts(){
    return this.http.get<Product[]>('http://localhost:3000/product');
  }
//Get all products from MongoDB database
//seller-home on which page getallproducts called from
  getAllProductsMongoDB(){
    return this.http.get<Product[]>('http://localhost:4000/seller-home');
  }


  //Get Single products from JSON server
  getSingleProduct(produtid: any){
    return this.http.get<Product>(`http://localhost:3000/product/${produtid}`);
  }
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }

  updateProduct(product: Product){
    return this.http.put<Product>(`http://localhost:3000/product/${product.id}`,product);
  }

  //Get Populer products from JSON server
  getPopularProduct(){
    return this.http.get<Product[]>(`http://localhost:3000/product?_limit=3`);
  }

  //Get trendy products from JSON server
  getTrndyProduct(){
    return this.http.get<Product[]>(`http://localhost:3000/product`);
  }

   //search  products from JSON server
   searchProduct(query: any){
    return this.http.get<Product[]>(`http://localhost:3000/product?q=${query}`);
  }
}
