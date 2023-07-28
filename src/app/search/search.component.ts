import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../appModels/addproduct.madel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults:undefined|Product[]
  constructor(private activeRoute:ActivatedRoute ,private productService:ProductService) { }

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    query && this.productService.searchProduct(query).subscribe((result)=>{
    this.searchResults = result;  
    })
  }

}
