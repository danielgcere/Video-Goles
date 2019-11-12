//Importamos todas las clases que necesita el Interactor (Arquitectura VIP).
const DataBaseInteractor = require('../Interactors/DataBase/DataBaseInteractor');
const VideoAPIInteractor = require('../Interactors/Services/VideoAPIInteractor');
const WebInteractor = require('../Interactors/Services/WebInteractor');

//Exportamos todas las clases que necesita el Interactor (Arquitectura VIP).
module.exports.DataBaseInteractor = DataBaseInteractor;
module.exports.VideoAPIInteractor = VideoAPIInteractor;
module.exports.WebInteractor = WebInteractor;