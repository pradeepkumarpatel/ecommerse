import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Login, SignUp } from '../appModels/signup.model';
import { Seller } from '../appModels/seller.model';

@Component({
  selector: 'app-sell-auth',
  templateUrl: './sell-auth.component.html',
  styleUrls: ['./sell-auth.component.css']
})
export class SellAuthComponent implements OnInit {
  checkLogin: boolean = false;
  showLoginError:string =''
  constructor(private seller: SellerService, private router: Router) { }
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: SignUp) {
    this.seller.userSignUp(data) // called service method
    // this.router.navigate(['seller-home'])
  }

  login(data: Login) {
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError) =>{
      if(isError){
        this.showLoginError='email or password may be incorrect'
      }
    })
  }
  // Sign Up with mongodb
  signupmongo(seller: Seller) {
    this.seller.userSignUpByMongodb(seller).subscribe(resdata => {
      this.router.navigate(['seller-home'])
    })
  }

  switchForm() {
    this.checkLogin = !this.checkLogin;
  }
}
