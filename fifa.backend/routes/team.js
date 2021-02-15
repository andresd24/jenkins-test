'use strict'

var express = require('express');
var TeamController = require('../controllers/team');

var api = express.Router();
var md_auth = require('../middlewares/authenticate');
var md_admin = require('../middlewares/is_admin');

var multipart = require('connect-multiparty');
var md_updload = multipart({ uploadDir: './uploads/teams' });

api.get('/pruebas-animales', md_auth.ensureAuth, TeamController.pruebas);
api.post('/team', [md_auth.ensureAuth, md_admin.isAdmin], TeamController.saveTeam);
api.get('/teams', TeamController.getTeams);
api.get('/team/:id', TeamController.getTeam);
api.put('/team/:id', [md_auth.ensureAuth, md_admin.isAdmin], TeamController.updateTeam);
api.post('/upload-image-team/:id', [md_auth.ensureAuth, md_admin.isAdmin, md_updload], TeamController.updloadImage);
api.get('/get-image-team/:imageFile', TeamController.getImageFile);
api.delete('/team/:id', [md_auth.ensureAuth, md_admin.isAdmin], TeamController.deleteTeam);

module.exports = api;