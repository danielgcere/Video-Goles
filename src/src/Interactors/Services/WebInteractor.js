'use strict';

//Constantes de VIP.
const Attributes = require('../../Classes/Attributes');
const Match = require('../../Classes/Match');
const ListMatch = require('../../Classes/ListMatch');
const Libraries = require('../../Base/Libraries');
const https = require('https');

/**
 * Función getWebVideoMatch: encargada de devolver las llamadas al servicio, debe ser remplazada y se encuntra a modo de ejemplo.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getWebVideoMatch(attributes = new Attributes().init(attributes)){
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getWebVideoMatch INIT');

            let options = {
                host: 'https://www.scorebat.com',
                port: 443,
                path: '/embed/g/811726/?s=2',
                method: 'GET'
              };

            https.request(options, function(res) {
                console.VIPLog('STATUS: ' + res.statusCode);
                console.VIPLog('HEADERS: ' + JSON.stringify(res.headers));
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    console.VIPLog('BODY: ' + chunk);
                });
                res.on('error', function (error) {
                    console.error(error);
                });
            });

            /*
            await https.get('https://www.scorebat.com/embed/g/811726/?s=2', (res) => {
                console.VIPLog('statusCode:', res.statusCode);
                console.VIPLog('headers:', res.headers);
                console.VIPLog('res:', res);

                res.on('data', (d) => {
                    console.VIPLog('response:', d);
                });

                }).on('error', (e) => {
                    console.error(e);
            });
            */

            console.VIPLog('attributes al salir de getWebVideoMatch: ' + JSON.stringify(attributes, null, 4));
            
            console.VIPLog('getWebVideoMatch ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getWebVideoMatch process try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        console.VIPError('getWebVideoMatch try error: ' + error);
        throw new Error(error);
    }
}


module.exports.getWebVideoMatch = getWebVideoMatch;