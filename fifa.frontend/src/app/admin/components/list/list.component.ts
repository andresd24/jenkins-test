import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../services/global';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jQuery: any;
declare var $:any;

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [ TeamService, UserService, UploadService ]
})

export class ListComponent implements OnInit  {
    title = 'Listado';
    public teams: Team[];
    public token: string;
    public searchTerm;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _teamService: TeamService,
      private _userService: UserService
    ){
        this.title = 'Listado de Animales';
    }

    ngOnInit() {
        this.token = this._userService.get_token();
        this._teamService.get_teams().subscribe(
            response => {
                if (!response.teams) {

                }
                else {
                    this.teams = response.teams;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    getTeams() {
        this._teamService.get_teams().subscribe(
          response => {
              if (!response.teams) {

              }
              else {
                  this.teams = response.teams;
              }
          },
          error => {
              console.log(<any>error);
          }
      );
    }

    deleteTeam(id) {
        $('#myModal-' + id).modal('hide');
        this._teamService.delete_team(this.token, id).subscribe(
            response => {
                if (!response.team) {
                    alert('Error en el servidor');
                }
                this.getTeams();
            },
            error => {
                alert('Error en el servidor');
            }

        );

    }

}
