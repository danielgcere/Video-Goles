'use strict';

//Constantes de VIP.
const Attributes = require('../../Classes/Attributes');
const Match = require('../../Classes/Match');
const Libraries = require('../../Base/Libraries');
const unirest = require("unirest");

/**
 * Función getFeedVideoGoles: encargada de devolver las llamadas al servicio, debe ser remplazada y se encuntra a modo de ejemplo.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getFeedVideoGoles(attributes = new Attributes().init(attributes)){
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getFeedVideoGoles INIT');

            await getVideos().then((body) => {
                
                body.forEach(function (match) {
                    attributes.videoGoles.matches.push(new Match().init(match));
                });

                attributes.videoGoles.numMatches = body.length;
            
            }).catch((error) => console.log("error", error));
            console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
            
            console.VIPLog('getFeedVideoGoles ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getFeedVideoGoles process try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        console.VIPError('getFeedVideoGoles try error: ' + error);
        throw new Error(error);
    }
}

async function getVideos(){
    let headers = {
        "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
        "x-rapidapi-key": "FHle4SPjBWmshBs34BE91YlKoriFp1ktUQcjsnCXK1PftgbJgV"
    };

    return new Promise((resolve,reject) => {
        unirest.get('https://free-football-soccer-videos.p.rapidapi.com/')
            .headers(headers)
            .end(function (response) {
                if(response.error){
                    return reject(error)
                }
                console.VIPLog('Respuesta : ' + JSON.stringify(response, null, 4));
                console.VIPLog('Error : ' + JSON.stringify(response.error, null, 4));
                console.VIPLog('Body : ' + JSON.stringify(response.body, null, 4));
                return resolve(response.body); 
            });
        });
    }

module.exports.getFeedVideoGoles = getFeedVideoGoles;