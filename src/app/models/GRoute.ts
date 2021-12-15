export interface GRoute {
    path: string;
    component: any;
    children: Array<GRoute> | null;
    isNeedLogin: boolean,
    meta: object | null
}