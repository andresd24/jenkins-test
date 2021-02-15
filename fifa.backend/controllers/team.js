'use strict'

//modulos
var fs = require('fs');
var path = require('path');

//modelos
var User = require('../models/user');
var Team = require('../models/team');

// libs
var jwt = require('../services/jwt');

function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando controlador de usuarios y la accion de pruebas',
        user: req.user
    });

} // end pruebas

// saveAnimal
function saveTeam(req, res) {
    var team = new Team();
    var params = req.body;

    if (params.name) {
        team.name = params.name
        team.league = params.league;
        team.country = params.country;
        team.year = team.year;
        team.image = null;
        team.user = req.user.sub;

        team.save((err, teamStored) => {
            if (err) {
                res.status(500).send({ message: 'server error' });
            }
            if (!teamStored) {
                res.status(404).send({ message: 'team could not be saved' });
            } else {
                res.status(200).send({ team: teamStored });
            }
        });
    } else {
        res.status(404).send({ message: 'team name is required' });
    }
}

// getAnimals
function getTeams(req, res) {
    Team.find({}).populate({ path: 'user' }).exec((err, teams) => {
        if (err) {
            res.status(500).send({ message: 'server error' });
        } else {
            if (!teams) {
                res.status(404).send({ message: 'no teams found' });
            } else {
                res.status(200).send({ teams });
            }
        }
    });
}

// getAnimal
function getTeam(req, res) {
    var teamId = req.params.id;

    Team.findById(teamId).populate({ path: 'user' }).exec((err, team) => {
        if (err) {
            res.status(500).send({ message: 'server error' });
        } else {
            if (!team) {
                res.status(404).send({ message: 'team does not exist' });
            } else {
                res.status(200).send({ team });
            }
        }
    });
}

// updateAnimal
function updateTeam(req, res) {
    var teamId = req.params.id;
    var update = req.body;

    Team.findByIdAndUpdate(teamId, update, { new: true }, (err, teamUpdated) => {
        if (err) {
            res.status(500).send({ message: 'error en la peticion' });
        } else {
            if (!teamUpdated) {
                res.status(404).send({ message: 'no se ha actualizado el animal' });
            } else {
                res.status(200).send({ team: teamUpdated });
            }
        }
    });
}


// updloadImage
function updloadImage(req, res) {
    var teamId = req.params.id;
    var file_name = "No subido...";

    var file_path;
    var file_split;
    var file_name;

    if (req.files) {
        file_path = req.files.image.path;
        file_split = file_path.split('/');
        file_name = file_split[2];
    }


    var ext_split = file_name.split('\.');
    var file_ext = ext_split[1];

    if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif') {

        Team.findByIdAndUpdate(teamId, { image: file_name }, { new: true }, (err, teamUpdated) => {
            if (err) {
                res.status(500).send({ message: 'error actualizando usuario' });
            } else {
                if (!teamUpdated) {
                    res.status(404).send({ message: 'No se ha podido actualizar el team' });
                } else {
                    res.status(200).send({ team: teamUpdated, image: file_name });
                }
            }
        });
    } else {
        fs.unlink(file_path, (err) => {
            if (err) {
                return res.status(500).send({
                    message: 'extension no valida y fichero no guardado ',
                    file_ext: file_ext,
                    file_path: file_path
                });
            } else {
                return res.status(500).send({
                    message: 'extension no valida',
                    file_ext: file_ext,
                    file_path: file_path
                });
            }
        })

    }
} // end uploadImage

// getImageFile
function getImageFile(req, res) {
    var imageFile = req.params.imageFile;
    var path_file = './uploads/animals/' + imageFile;

    fs.exists(path_file, function(exists) {
        if (exists) {
            res.sendFile(path.resolve(path_file));
        } else {
            res.status(404).send({ message: 'la imagen no fue encontrada' });
        }
    });
} // end getImageFile

// deleteAnimal
function deleteTeam(req, res) {
    var teamId = req.params.id;

    Team.findByIdAndRemove(teamId, (err, teamRemoved) => {
        if (err) {
            res.status(500).send({ message: 'error en la peticion' });
        } else {
            if (!teamRemoved) {
                res.status(404).send({ message: 'no se pudo borrar animal' });
            } else {
                res.status(200).send({ team: teamRemoved });
            }
        }
    });
}

// exports
module.exports = {
    pruebas,
    saveTeam,
    getTeams,
    getTeam,
    updateTeam,
    updloadImage,
    getImageFile,
    deleteTeam
};