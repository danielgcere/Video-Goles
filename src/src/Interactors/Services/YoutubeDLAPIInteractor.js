'use strict';

//Constantes de VIP.
const Attributes = require('../../Classes/Attributes');
const Match = require('../../Classes/Match');
const ListMatch = require('../../Classes/ListMatch');
const Libraries = require('../../Base/Libraries');
const unirest = require("unirest");
const youtubedl = require('youtube-dl')


/**
 * Función getRandomVideoMatch: encargada de devolver las llamadas al servicio, debe ser remplazada y se encuntra a modo de ejemplo.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getRandomVideoMatch(attributes = new Attributes().init(attributes)){
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getRandomVideoMatch INIT');

            let url = 'http://www.youtube.com/watch?v=WKsjaOqDXgg';
            // Optional arguments passed to youtube-dl.
            let options = ['--username=user', '--password=hunter2'];
             
            youtubedl.getInfo(url, options, function(err, info) {
              if (err) throw err
             
              console.log('id:', info.id)
              console.log('title:', info.title)
              console.log('url:', info.url)
              console.log('thumbnail:', info.thumbnail)
              console.log('description:', info.description)
              console.log('filename:', info._filename)
              console.log('format id:', info.format_id)
            });

            console.VIPLog('attributes al salir de getRandomVideoMatch: ' + JSON.stringify(attributes, null, 4));
            
            console.VIPLog('getRandomVideoMatch ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getRandomVideoMatch process try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        console.VIPError('getRandomVideoMatch try error: ' + error);
        throw new Error(error);
    }
}


module.exports.getRandomVideoMatch = getRandomVideoMatch;