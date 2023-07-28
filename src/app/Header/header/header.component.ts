import { Component, EventEmitter, OnChanges, OnInit, Renderer2, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/appModels/addproduct.madel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = "default-menu";
  selleName: string | null = ''
  searchResults: undefined | Product[]
  constructor(private router: Router, private productservice: ProductService) {
  }
  ngOnInit() {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        console.warn(val.url);
        if (localStorage.getItem('seller') && val.url.includes('sell')) {
          this.menuType = 'seller-menu';
          if (localStorage.getItem('seller')) {
            let sellerData = localStorage.getItem('seller')
            this.selleName = sellerData && JSON.parse(sellerData).name;
          }
        }
        else {
          this.menuType = 'default-menu';
        }
      }
    })
  }

  sellerLogout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

  elem: undefined | HTMLInputElement
  searchProductSuggestion(data: KeyboardEvent) {
    if (data) {
      this.elem = data.target as HTMLInputElement;
    }
      this.productservice.searchProduct(this.elem?.value).subscribe((result) => {
        if (result.length > 5) {
          result.length = 5
        }
        this.searchResults = result;
      })
  }
  hideSearchResults() {
    this.searchResults = undefined;
  }
  submitSearch(val:any){
    this.router.navigate([`search/${val.value}`]);
  }
}


