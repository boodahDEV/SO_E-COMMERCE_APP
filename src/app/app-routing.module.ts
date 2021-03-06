import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./auth.guard";

import { SigninComponent } from './components/signin/signin.component'
import { SignupComponent } from './components/signup/signup.component'
import { SettingComponent } from "./components/setting/setting.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ChestComponent } from "./components/chest/chest.component";
import { PrivateChestsComponent } from "./components/private-chests/private-chests.component";
import { ChestInfoComponent } from './components/chest-info/chest-info.component';
import { NbLoginComponent } from '@nebular/auth';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { ProductComponent } from './components/product/product.component';
import { CategoiaPorProductoComponent } from './components/categoia-por-producto/categoia-por-producto.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch: 'full'
  },
  {
    path:'settings',
    component:SettingComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'product',
    component:ProductComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'category',
    component:CategoryProductComponent,
  },
  {
    path:'category/:id/:id2',
    component:CategoiaPorProductoComponent,
  },
  {
    path:'inventory',
    component:InventoryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'supplier',
    component:SupplierComponent,
    canActivate:[AuthGuard]

  },
  // {
  //   path:'private-chest',
  //   component:PrivateChestsComponent,
  //   canActivate:[AuthGuard]
  // },
  // {
  //   path:'signup',
  //   component:SignupComponent
  // },
  // {
  //   path:'signin',
  //   component:SigninComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
