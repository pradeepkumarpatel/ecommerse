import { Component, OnInit, } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HomeserviceService } from './homeservice.service';
import { ProductService } from '../services/product.service';
import { Product } from '../appModels/addproduct.madel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProductData: undefined | Product[];
  trendyProductData : undefined | Product[];
  constructor(private productservice:ProductService) {
  }
  ngOnInit() {
    this.productservice.getPopularProduct().subscribe((popularitem)=>{
      this.popularProductData = popularitem
    })
    this.productservice.getTrndyProduct().subscribe((trendyitem)=>{
      this.trendyProductData = trendyitem
    })
  }
}
