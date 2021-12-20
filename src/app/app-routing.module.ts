import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { gRoutes } from './configs/routes';
import { GRoute } from './models/GRoute';
import { AuthGuard } from './guards/auth.guard';

// import { LoginComponent } from './pages/login/login.component';
// import { LayoutComponent } from './pages/layout/layout.component';
// import { DashbordComponent } from './pages/dashbord/dashbord.component';
// import { Page403Component } from './pages/errors/page403/page403.component';
// import { Page404Component } from './pages/errors/page404/page404.component';
// import { UsersComponent } from './pages/users/users.component';
// import { AdminsComponent } from './pages/users/admins/admins.component';
// import { OthersComponent } from './pages/users/others/others.component';
// import { AboutComponent } from './pages/about/about.component';
// import { ProductsComponent } from './pages/products/products.component';

// const routes: Routes = [
//   {path: 'login', component: LoginComponent},
//   {path: '', component: LayoutComponent, children: [
//     {path: 'dashbord', component: DashbordComponent},
//     {path: 'users', component: UsersComponent, children:[
//       {path: 'admins', component: AdminsComponent},
//       {path: 'others', component: OthersComponent}
//     ]},
//     {path: 'about', component: AboutComponent},
//     {path: 'products', component: ProductsComponent},
//   ]},
//   {path: '404', component: Page404Component},
//   {path: '403', component: Page403Component}
// ];

const routes: Routes = [];

function createRoute(route: GRoute): object {
  if(route.children){
    let chRoutes = route.children.map(rItem => {
      return createRoute(rItem);
    });
    return {
      path: route.path,
      component: route.component,
      children: chRoutes,
      canActivate: route.isNeedLogin ? [ AuthGuard ] : null
    };
  }else{
    return {
      path: route.path,
      component: route.component,
      canActivate: route.isNeedLogin ? [ AuthGuard ] : null
    };
  }
}

function initRoutes() {
  gRoutes.forEach(item => {
    routes.push(createRoute(item));
  });

  // routes.push({ path: '', redirectTo: '/dashbord', pathMatch: 'full' },);
}

initRoutes();

console.log("routes: ", routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
