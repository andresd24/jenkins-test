import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';

@Injectable()
export class TeamService {
    public url: String;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    add_team(token, team) {
        let params = JSON.stringify(team);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.post(this.url + 'team', params, {headers: headers})
            .pipe(
                 map(res => res.json())
            )
    }

    get_teams() {
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this._http.get(this.url + 'teams', options)
            .pipe(
                map(res => res.json())
            )
    }

    get_team(id) {
        return this._http.get(this.url + 'team/' + id).pipe(
            map(res => res.json())
        );
    }

    edit_team(token, id, team) {
        let params = JSON.stringify(team);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.put(this.url + 'team/' + id, params, {headers:headers}).pipe(
            map(res => res.json())
        );  
    }

    delete_team(token, id) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        let options = new RequestOptions({headers:headers});

        return this._http.delete(this.url + 'team/' + id, options).pipe(
            map(res => res.json())
        );
    }

}