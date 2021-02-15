import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';



@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  providers: [ TeamService, UserService, UploadService ]
})

export class AddComponent {
    public title: string;
    public team: Team;
    public identity;
    public token;
    public url: string;
    public status: string;
    public filesToUpload: Array<File>;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _teamService: TeamService,
      private _userService: UserService,
      private _uploadService: UploadService
    ) {
        this.title = 'Add Team';
        this.team = new Team('', '', '', '', 2018, '', '');
        this.identity = this._userService.get_identity();
        this.token = this._userService.get_token();
        this.url = GLOBAL.url;

    }

    onSubmit() {
        this._teamService.add_team(this.token, this.team).subscribe(
            response => {
                if (!response.team) {
                    this.status = 'error';
                } else {
                    this.status = 'success';
                    this.team = response.team;

                    if (!this.filesToUpload) {
                       this._router.navigate(['/admin-panel/listado']);
                    } else  {
                        this._uploadService.make_file_request
                            (this.url + 'upload-image-team/' + this.team ._id, [], this.filesToUpload, this.token, 'image' )
                            .then((result: any) => {
                                this.team.image = result.image;
                                this._router.navigate(['/admin-panel/listado']);
                            }
                        );
                    }
                  }
            },
            error => {
                var errorMessage = <any>error;

                if (errorMessage != null) {
                    this.status = "error";
                }
            }
        )
    }

    fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
    }

}
