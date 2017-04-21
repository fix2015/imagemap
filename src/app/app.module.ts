import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';
import {AlertModule} from 'ng2-bootstrap/alert';
import {ButtonsModule} from 'ng2-bootstrap';
import {UIRouterModule} from "ui-router-ng2";
import {MAIN_STATES} from "./app.config";
import {HomeComponent} from "./home/home.component";
import {TranslateModule} from "ng2-translate";
import {Ng2Webstorage} from "ng2-webstorage";
import {HttpModule} from "@angular/http";
import {ModalModule} from 'angular2-modal';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';
import {LoginComponent} from "./login/login.component";
import {uiRouterConfigFn} from "./router.config";
import {GlobalService} from "./services/global.service";
import {TestComponent} from "./test.component";
import {AgmCoreModule} from "angular2-google-maps/core";
import {MapComponent} from "./map/map.component";
import {ChatComponent} from "./chat/chat.component";
import {Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';
import {EmitterService} from "./services/emitter.service";
import {PubNubAngular} from 'pubnub-angular2';
import {PubNub} from 'pubnub';

@NgModule({
    imports: [
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        ModalModule.forRoot(),
        Ng2Bs3ModalModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        UIRouterModule.forRoot({states: MAIN_STATES, useHash: false, config: uiRouterConfigFn}),
        TranslateModule.forRoot(),
        ModalModule.forRoot(),
        BootstrapModalModule,
        Ng2Webstorage,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDuYHKUw_2qFtXZNb1EkWSQJbHnN7GaXMM',
            libraries: ["places"]
        })

    ],
    exports: [],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        MapComponent,
        ChatComponent,
        TestComponent,
    ],
    bootstrap: [AppComponent],
    providers: [GlobalService, EmitterService, PubNubAngular],
    entryComponents: []
})
export class AppModule {
}
