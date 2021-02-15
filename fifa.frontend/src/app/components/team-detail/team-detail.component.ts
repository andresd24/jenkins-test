import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../services/global';
import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  providers: [ TeamService ]
})

export class TeamDetailComponent implements OnInit  {
    public url: string;
    public team: Team;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _teamService: TeamService,
    ){
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        this.getTeam();
    }

    getTeam() {
        this._route.params.forEach((params:Params) => {
            let id = params['id'];

            this._teamService.get_team(id).subscribe(
                response => {
                    if (!response.team) {
                        this._router.navigate(['/']);        
                    } 
                    else {
                        this.team = response.team;
                    }
                },
                error => {
                    console.log(<any>error);
                    this._router.navigate(['/home']);        

                }        
            );

        });
    }

}