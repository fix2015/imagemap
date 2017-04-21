import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StateService} from 'ui-router-ng2';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap-social/assets/css/font-awesome.css';
import 'bootstrap-social/assets/fonts/fontawesome-webfont.ttf'


@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    private showMessage: boolean = false;
    private class: string = '';
    private message: string = '';
    private form: FormGroup;
    private user = {};

    constructor(private fb: FormBuilder, private state: StateService) {
        this.form = fb.group({
            'login': [null, Validators.compose([Validators.required])]
        });

    }

    public goBack() {
        window.history.back();
    }

    public submitForm() {
        this.state.go('home');
    }
}
