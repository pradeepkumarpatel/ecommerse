import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Login, SignUp } from '../appModels/signup.model';
import { Seller } from '../appModels/seller.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient, private router: Router) { }
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  // Post by json-server
  userSignUp(sellerdata: SignUp) {
    this.http.post('http://localhost:3000/seller', sellerdata, { observe: 'response' }).subscribe((data:any) => {
      this.isSellerLoggedIn.next(true);   //for auth guard
      localStorage.setItem('seller', JSON.stringify(data.body)) //store sign up data in local storage at user's system
      this.router.navigate(['seller-home']) //after signup redirect to seller home page
    })
  }


  // Login by json-server
  // observe: 'response' when uses this it returns data in body
  userLogin(logindata: Login) {
    this.http.get(`http://localhost:3000/seller?email=${logindata.email}&pass=${logindata.pass}`, { observe: 'response' }).subscribe((data: any) => {
      if (data.body && data.body.length) {
        localStorage.setItem('seller', JSON.stringify(data.body[0])) //store Login data in local storage at user's system
        this.router.navigate(['seller-home']) //after login redirect to seller home page
      } else {
        this.isLoginError.emit(true);
      }
    })
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);   //set true if local user is logged in
      this.router.navigate(['seller-home']) //after logged in redirect to seller home page
    }
  }

  // Post by mongodb-server
  userSignUpByMongodb(sellerdata: Seller) {
    return this.http.post('http://localhost:4000/sell-auth', sellerdata)
  }
}
