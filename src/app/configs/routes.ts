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
import { DetailComponent } from "../pages/users/detail/detail.component";
import { D3Component } from "../pages/d3/d3.component";

export const sideMenuRoutes: GRoute[] = [
    {
        path: 'dashbord',
        routeLink: 'dashbord',
        component: DashbordComponent,
        isNeedLogin: true,
        isShow: true,
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
        routeLink: 'users',
        component: UsersComponent,
        isNeedLogin: true,
        isShow: true,
        children: [
            {
                path: 'admins',
                routeLink: 'users/admins',
                component: AdminsComponent,
                children: null,
                isNeedLogin: true,
                isShow: true,
                meta: {
                    title: "Admins",
                    icon: "apple-fill",
                    authIds: [],
                    level: 2,
                }
            },
            {
                path: 'others',
                routeLink: 'users/others',
                component: OthersComponent,
                children: null,
                isNeedLogin: true,
                isShow: true,
                meta: {
                    title: "Others",
                    icon: "android-fill",
                    authIds: [],
                    level: 2,
                }
            },
            {
                path: 'details/:id',
                routeLink: 'users/detail',
                component: DetailComponent,
                children: null,
                isNeedLogin: true,
                isShow: false,
                meta: {
                    title: "",
                    icon: "",
                    authIds: [],
                    level: 3,
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
        routeLink: 'about',
        component: AboutComponent,
        isNeedLogin: true,
        isShow: true,
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
        routeLink: 'products',
        component: ProductsComponent,
        isNeedLogin: true,
        isShow: true,
        children: null,
        meta: {
            title: "Products",
            icon: "taobao-circle-fill",
            authIds: [],
            level: 1,
        }
    },
    {
        path: 'd3',
        routeLink: 'd3',
        component: D3Component,
        isNeedLogin: true,
        isShow: true,
        children: null,
        meta: {
            title: "D3",
            icon: "twitter-circle-fill",
            authIds: [],
            level: 1,
        }
    },
];

export const mainLayoutRoutes: GRoute[] = [
    {
        path: '', 
        routeLink: '',
        component: LayoutComponent,
        isNeedLogin: true,
        isShow: true,
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
        routeLink: '403',
        component: Page403Component,
        isNeedLogin: false,
        isShow: true,
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
        routeLink: '404',
        component: Page404Component,
        isNeedLogin: false,
        isShow: true,
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
        routeLink: 'login',
        component: LoginComponent,
        isNeedLogin: false,
        isShow: true,
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