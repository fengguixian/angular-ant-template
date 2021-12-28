import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class SimpleReuseStrategy implements RouteReuseStrategy {
    // _cacheRouters: { [key: string]: any } = {};
    // shouldDetach(route: ActivatedRouteSnapshot): boolean {
    //     return true;
    // }
    // store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    //     this._cacheRouters[route.routeConfig.path] = {
    //         snapshot: route,
    //         handle: handle
    //     };
    // }
    // shouldAttach(route: ActivatedRouteSnapshot): boolean {
    //     return !!this._cacheRouters[route.routeConfig.path];
    // }
    // retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    //     return this._cacheRouters[route.routeConfig.path].handle;
    // }
    // shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    //     return future.routeConfig === curr.routeConfig;
    // }

    public static handlers: { [key: string]: DetachedRouteHandle } = {}

    /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return true;
    } 

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        let cfg = route.routeConfig;
        SimpleReuseStrategy.handlers[cfg!.path!] = handle
    }

    /** 若 path 在缓存中有的都认为允许还原路由 */
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!SimpleReuseStrategy.handlers[route.routeConfig.path!]
    }

    /** 从缓存中获取快照，若无则返回nul */
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        if (!route.routeConfig) {
            return null;
        }
        return SimpleReuseStrategy.handlers[route.routeConfig.path!];
    }
    
    /** 进入路由触发，判断是否同一路由 */
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }
}
