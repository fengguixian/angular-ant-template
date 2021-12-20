export interface GRoute {
    path: string | Array<string>;
    routeLink: string;
    component: any;
    children: Array<GRoute> | null;
    isNeedLogin: boolean,
    isShow: boolean,
    meta: Meta
}

export interface Meta {
    title: string;
    icon: string;
    authIds: Array<string|number> | null;
    level: number
}