import { GRoute } from "../models/GRoute";
import { LoginComponent } from "../pages/login/login.component";
import { LayoutComponent } from "../pages/layout/layout.component";
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
        meta: {
            title: "Dashbord",
            icon: "dashboard-fill",
            authIds: [],
            level: 1,
        }
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
                isNeedLogin: true,
                meta: {
                    title: "Admins",
                    icon: "apple-fill",
                    authIds: [],
                    level: 2,
                }
            },
            {
                path: 'others',
                component: OthersComponent,
                children: null,
                isNeedLogin: true,
                meta: {
                    title: "Others",
                    icon: "android-fill",
                    authIds: [],
                    level: 2,
                }
            },
        ],
        meta: {
            title: "Users",
            icon: "gold-fill",
            authIds: [],
            level: 1,
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        isNeedLogin: true,
        children: null,
        meta: {
            title: "About",
            icon: "info-circle",
            authIds: [],
            level: 1,
        }
    },
    {
        path: 'products',
        component: ProductsComponent,
        isNeedLogin: true,
        children: null,
        meta: {
            title: "Products",
            icon: "taobao-circle-fill",
            authIds: [],
            level: 1,
        }
    },
];

export const mainLayoutRoutes: GRoute[] = [
    {
        path: '', 
        component: LayoutComponent,
        isNeedLogin: true,
        children: sideMenuRoutes,
        meta: {
            title: '',
            icon: '',
            authIds: [],
            level: 1,
        }
    }
]

export const errorRoutes: GRoute[] = [
    {
        path: '403',
        component: Page403Component,
        isNeedLogin: false,
        children: null,
        meta: {
            title: '',
            icon: '',
            authIds: [],
            level: 1,
        }
    },
    {
        path: '404',
        component: Page404Component,
        isNeedLogin: false,
        children: null,
        meta: {
            title: '',
            icon: '',
            authIds: [],
            level: 1,
        }
    }
]

export const gRoutes: GRoute[] = [
    {
        path: 'login', 
        component: LoginComponent,
        isNeedLogin: false,
        children: null,
        meta: {
            title: '',
            icon: '',
            authIds: [],
            level: 1,
        }
    },
    ...mainLayoutRoutes,
    ...errorRoutes
];