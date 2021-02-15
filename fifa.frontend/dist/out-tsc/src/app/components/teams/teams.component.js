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
import { TeamService } from '../../services/team.service';
import { GLOBAL } from '../../services/global';
import { fadeIn } from '../../components/animation';
var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(_teamService) {
        this._teamService = _teamService;
        this.title = 'Teams';
        this.title = "Teams";
        this.url = GLOBAL.url;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        console.log("TeamsComponent OnInit");
        this.getTeams();
    };
    TeamsComponent.prototype.getTeams = function () {
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
    TeamsComponent = __decorate([
        Component({
            selector: 'teams',
            templateUrl: './teams.component.html',
            providers: [TeamService],
            animations: [fadeIn]
        }),
        __metadata("design:paramtypes", [TeamService])
    ], TeamsComponent);
    return TeamsComponent;
}());
export { TeamsComponent };
//# sourceMappingURL=teams.component.js.map