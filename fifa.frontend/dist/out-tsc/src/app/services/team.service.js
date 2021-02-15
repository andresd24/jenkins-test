var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';
var TeamService = /** @class */ (function () {
    function TeamService(_http) {
        this._http = _http;
        this.url = GLOBAL.url;
    }
    TeamService.prototype.add_team = function (token, team) {
        var params = JSON.stringify(team);
        var headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'team', params, { headers: headers })
            .pipe(map(function (res) { return res.json(); }));
    };
    TeamService.prototype.get_teams = function () {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this._http.get(this.url + 'teams', options)
            .pipe(map(function (res) { return res.json(); }));
    };
    TeamService.prototype.get_team = function (id) {
        return this._http.get(this.url + 'team/' + id).pipe(map(function (res) { return res.json(); }));
    };
    TeamService.prototype.edit_team = function (token, id, team) {
        var params = JSON.stringify(team);
        var headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'team/' + id, params, { headers: headers }).pipe(map(function (res) { return res.json(); }));
    };
    TeamService.prototype.delete_team = function (token, id) {
        var headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new RequestOptions({ headers: headers });
        return this._http.delete(this.url + 'team/' + id, options).pipe(map(function (res) { return res.json(); }));
    };
    TeamService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], TeamService);
    return TeamService;
}());
export { TeamService };
//# sourceMappingURL=team.service.js.map