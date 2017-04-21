import {UIRouter} from "ui-router-ng2";
import {Injector, Injectable} from "@angular/core";

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  // const userService = injector.get(UserService);

  // Pre-load person at startup.
  // userService.getPerson();


  // If no URL matches, go to the `login` state by default
  router.urlService.rules.otherwise({state: 'home'});

}
