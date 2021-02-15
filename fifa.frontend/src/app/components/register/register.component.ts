import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { fadeIn } from '../../components/animation';

declare var jQuery: any;
declare var $:any;


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UserService],
    animations: [ fadeIn ]
})

export class RegisterComponent {
    public title: String;
    public user: User;
    public status: String;
    public shown: String;
    public errorMessage: String;
    cPassword: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.title = 'Register';
        this.user = new User('','','','','','ROLE_USER', '');
        this.shown = 'false';
    }

    validateSignUpInfo(): boolean {
        this.errorMessage = '';
        this.status = '';
        if (!this.user.name || !this.user.surname || !this.user.password || !this.user.email ||
            this.user.name.trim() === '' || this.user.surname.trim() === '' ||
            this.user.password.trim() === '' || this.user.email.trim() === '') {
            this.errorMessage = 'Please fill all the fields in the registration form since all are required tor register at the Zoo';
            this.status = 'error';
        return false;
        }

        if (this.user.password !== this.cPassword) {
            this.errorMessage = 'The passwords you entered didn\'t match.  Please try again.';
            this.status = 'error';
            return false;
        }

        if (!this.validateEmail()) {
            this.errorMessage = 'The email you entered is not a valid email.  Please try again.';
            this.status = 'error';
            return false;
        }

        if (!this.validatePassword()) {
            this.errorMessage = `Your password needs to be at least eight characters long,
                combine upper case and lower case letters, include a number, and a one of these
                three special characters (@, ?. or !).`;
            this.status = 'error';

            return false;
        }

    return true;
  }


    onSubmit() {
        if (this.validateSignUpInfo()) {
            this._userService.register(this.user).subscribe(
            response => {
                if (response.user._id) {
                    this.status = 'success';
                    this.user = new User('', '', '', '', '','ROLE_USER', '');
                    this.shown = 'true';
                } else {
                    this.status = 'error';
                }
            },
            error => {
//                console.log(<any>error);
                this.status = 'error';
            }
          );
       }
    }


  private validateEmail(): boolean {
    // tslint:disable-next-line: max-line-length
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(this.user.email);
  }

  private validatePassword(): boolean {
    // tslint:disable-next-line: max-line-length
    const re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@\?])(?=.{8,})');

    return re.test(this.user.password);
  }


}