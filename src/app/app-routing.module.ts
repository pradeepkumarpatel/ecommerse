import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SellAuthComponent } from './sell-auth/sell-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sell-auth',component:SellAuthComponent},
  {path:'seller-home',canActivate:[AuthGuard],component:SellerHomeComponent},
  {path:'seller-add-product',canActivate:[AuthGuard],component:SellerAddProductComponent},
  {path:'seller-update-product/:id',canActivate:[AuthGuard],component:SellerUpdateProductComponent},
  {path:'search/:query',component:SearchComponent},
  {path:'details/:produntId',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
