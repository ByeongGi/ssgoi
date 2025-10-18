import {
  ActivatedRouteSnapshot,
  RouteReuseStrategy,
  DetachedRouteHandle,
} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null
  ): void {
    // No-op
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    // For /transitions/:id routes, don't reuse if the :id param changed
    if (future.routeConfig === curr.routeConfig) {
      const futureId = future.params['id'];
      const currId = curr.params['id'];

      // If both have 'id' param and they differ, don't reuse the route
      if (
        futureId !== undefined &&
        currId !== undefined &&
        futureId !== currId
      ) {
        return false;
      }
    }

    // Default behavior: reuse if same route config
    return future.routeConfig === curr.routeConfig;
  }
}
