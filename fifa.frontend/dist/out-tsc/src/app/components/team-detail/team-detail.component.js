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
import { TeamService } from '../../services/team.service';
import { Router, ActivatedRoute } from '@angular/router';
var TeamDetailComponent = /** @class */ (function () {
    function TeamDetailComponent(_route, _router, _teamService) {
        this._route = _route;
        this._router = _router;
        this._teamService = _teamService;
        this.url = GLOBAL.url;
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
        this.getTeam();
    };
    TeamDetailComponent.prototype.getTeam = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._teamService.get_team(id).subscribe(function (response) {
                if (!response.team) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.team = response.team;
                }
            }, function (error) {
                console.log(error);
                _this._router.navigate(['/home']);
            });
        });
    };
    TeamDetailComponent = __decorate([
        Component({
            selector: 'team-detail',
            templateUrl: './team-detail.component.html',
            providers: [TeamService]
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            TeamService])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());
export { TeamDetailComponent };
//# sourceMappingURL=team-detail.component.js.map