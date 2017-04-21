import {Ng2StateDeclaration} from "ui-router-ng2";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";

export let MAIN_STATES: Ng2StateDeclaration[] = [
  {
    name: 'home', url: '/home',
    params: {modal: ''},
    component: HomeComponent
  },
  {name: 'login', url: '/login?/{hash:string}', component: LoginComponent}
];
