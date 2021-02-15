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
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Router, ActivatedRoute } from '@angular/router';
var ListComponent = /** @class */ (function () {
    function ListComponent(_route, _router, _teamService, _userService) {
        this._route = _route;
        this._router = _router;
        this._teamService = _teamService;
        this._userService = _userService;
        this.title = 'Listado';
        this.title = 'Listado de Animales';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this._userService.get_token();
        this._teamService.get_teams().subscribe(function (response) {
            if (!response.teams) {
            }
            else {
                _this.teams = response.teams;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ListComponent.prototype.getTeams = function () {
        var _this = this;
        this._teamService.get_teams().subscribe(function (response) {
            if (!response.teams) {
            }
            else {
                _this.teams = response.teams;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ListComponent.prototype.deleteTeam = function (id) {
        var _this = this;
        $('#myModal-' + id).modal('hide');
        this._teamService.delete_team(this.token, id).subscribe(function (response) {
            if (!response.team) {
                alert('Error en el servidor');
            }
            _this.getTeams();
        }, function (error) {
            alert('Error en el servidor');
        });
    };
    ListComponent = __decorate([
        Component({
            selector: 'admin-list',
            templateUrl: './list.component.html',
            providers: [TeamService, UserService, UploadService]
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            TeamService,
            UserService])
    ], ListComponent);
    return ListComponent;
}());
export { ListComponent };
//# sourceMappingURL=list.component.js.map