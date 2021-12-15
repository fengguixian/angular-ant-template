export interface GRoute {
    path: string;
    component: any;
    children: Array<GRoute> | null;
    isNeedLogin: boolean,
    meta: Meta
}

export interface Meta {
    title: string;
    icon: string;
    authIds: Array<string|number> | null
}