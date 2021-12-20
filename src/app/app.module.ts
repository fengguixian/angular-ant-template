import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntdModules } from './modules/antd.modules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { Page404Component } from './pages/errors/page404/page404.component';
import { Page403Component } from './pages/errors/page403/page403.component';
import { UsersComponent } from './pages/users/users.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminsComponent } from './pages/users/admins/admins.component';
import { OthersComponent } from './pages/users/others/others.component';
import { ProductsComponent } from './pages/products/products.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DetailComponent } from './pages/users/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    Page404Component,
    Page403Component,
    UsersComponent,
    AboutComponent,
    AdminsComponent,
    OthersComponent,
    ProductsComponent,
    LayoutComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AntdModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
