import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

import { FormsModule } from '@angular/forms'
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";

import { ChestComponent } from './components/chest/chest.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { PrivateChestsComponent } from './components/private-chests/private-chests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbIconModule, NbButtonModule, NbUserModule, NbActionsModule, NbSearchModule, NbContextMenuModule, NbSidebarModule, NbSidebarService, NbMenuModule, NbSelectModule, NbPopoverModule, NbAlertModule, NbInputModule, NbDialogModule, NbFormFieldModule, NbBadgeModule, NbListComponent } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChestConfigComponent } from './components/chest-config/chest-config.component';
import { ChestInfoComponent } from './components/chest-info/chest-info.component';
import { NbAuthModule } from '@nebular/auth';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { AddAcctionComponent } from './components/add-acction/add-acction.component';
import { ProductComponent } from './components/product/product.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { CategoiaPorProductoComponent } from './components/categoia-por-producto/categoia-por-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ChestComponent,
    DashboardComponent,
    SettingComponent,
    PrivateChestsComponent,
    ChestConfigComponent,
    ChestInfoComponent,
    CategoryProductComponent,
    AddAcctionComponent,
    ProductComponent,
    InventoryComponent,
    SupplierComponent,
    EditProductComponent,
    CategoiaPorProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbDialogModule.forRoot(),
    NbCardModule,
    NbBadgeModule,
    NbLayoutModule,
    NbIconModule,
    NbAuthModule,
    NbSelectModule,
    NbFormFieldModule,
    NbPopoverModule,
    NbInputModule,
    NbUserModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbActionsModule,
    NbSearchModule,
    NbButtonModule,
    NbContextMenuModule,
    NbEvaIconsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService,
      multi: true
    },
    NbSidebarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
