'use strict';

//Constantes de VIP.
const Attributes = require('../Classes/Attributes');
const Libraries = require('../Base/Libraries');
const Interactor = require('../Base/Interactor');


/**
 * Función getRandomVideoMessage: encargada de devolver el mensaje de despedida.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getRandomVideoMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getRandomVideoMessage INIT');

            //await Interactor.VideoAPIInteractor.getFeedVideoGoles(attributes);

            let randomPosition = Libraries.Utils.getRandomIndexOfArray(Libraries.TextConstants.RandomVideoSpeakText);
            await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.RandomVideoSpeakText[randomPosition], undefined, Libraries.TextConstants.RandomVideoRepromptText[randomPosition], undefined);
            console.VIPLog('getRandomVideoMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getRandomVideoMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

module.exports.getRandomVideoMessage = getRandomVideoMessage;