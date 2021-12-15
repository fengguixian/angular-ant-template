import { GRoute } from "../models/Route";
import { LoginComponent } from "../pages/login/login.component";
import { DashbordComponent } from "../pages/dashbord/dashbord.component";
import { Page404Component } from "../pages/errors/page404/page404.component";
import { Page403Component } from "../pages/errors/page403/page403.component";
import { UsersComponent } from "../pages/users/users.component";
import { AdminsComponent } from "../pages/users/admins/admins.component";
import { OthersComponent } from "../pages/users/others/others.component";
import { AboutComponent } from "../pages/about/about.component";
import { ProductsComponent } from "../pages/products/products.component";

export const sideMenuRoutes: GRoute[] = [
    {
        path: 'dashbord',
        component: DashbordComponent,
        isNeedLogin: true,
        children: null,
    },
    {
        path: 'users',
        component: UsersComponent,
        isNeedLogin: true,
        children: [
            {
                path: 'admins',
                component: AdminsComponent,
                children: null,
                isNeedLogin: true
            },
            {
                path: 'others',
                component: OthersComponent,
                children: null,
                isNeedLogin: true
            },
        ],
    },
    {
        path: 'about',
        component: AboutComponent,
        isNeedLogin: true,
        children: null,
    },
    {
        path: 'products',
        component: ProductsComponent,
        isNeedLogin: true,
        children: null,
    },
];

export const errorRoutes: GRoute[] = [
    {
        path: '403',
        component: Page403Component,
        isNeedLogin: false,
        children: null,
    },
    {
        path: '404',
        component: Page404Component,
        isNeedLogin: false,
        children: null,
    }
]

export const gRoutes: GRoute[] = [
    {
        path: 'login', 
        component: LoginComponent,
        isNeedLogin: false,
        children: null,
    },
    ...sideMenuRoutes,
    ...errorRoutes
];