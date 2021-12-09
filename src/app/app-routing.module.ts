import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { gRoutes } from './configs/routes';
import { GRoute } from './models/Route';

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
    };
  }else{
    return {
      path: route.path,
      component: route.component
    };
  }
}

function initRoutes() {
  gRoutes.map(item => {
    routes.push(createRoute(item));
  });
}

initRoutes();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
