var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(_userService, _uploadService) {
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.title = "Edit my profile";
        this.identity = this._userService.get_identity();
        this.token = this._userService.get_token();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        //console.log('se ha cargado el componente');
        this.token = this._userService.get_token();
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        delete this.user.password;
        console.log(this.user);
        this._userService.update_user(this.user).subscribe(function (response) {
            if (!response.user) {
                _this.status = "error";
            }
            else {
                localStorage.setItem('identity', JSON.stringify(_this.user));
                _this.status = "success";
                _this._uploadService.make_file_request(_this.url + 'upload-image-user/' + _this.user._id, [], _this.filesToUpload, _this.token, 'image')
                    .then(function (result) {
                    _this.user.image = result.image;
                    localStorage.setItem('identity', JSON.stringify(_this.user));
                });
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = "error";
            }
        });
    };
    UserEditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UserEditComponent = __decorate([
        Component({
            selector: 'user-edit',
            templateUrl: 'user-edit.component.html',
            providers: [UserService, UploadService]
        }),
        __metadata("design:paramtypes", [UserService,
            UploadService])
    ], UserEditComponent);
    return UserEditComponent;
}());
export { UserEditComponent };
//# sourceMappingURL=user-edit.component.js.map