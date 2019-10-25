"use strict";

//Constantes de VIP.
const Attributes = require('../Classes/Attributes');
const Libraries = require('../Base/Libraries');

class UtilsVIP {
    /**
     * Función getRepromptText: Retorna el reprompt de Alexa de forma dinámica.
     * @returns  {String} RepropmtSpeakText
     */
    static getRepromptText() {
        let randomPositionHeader = Libraries.Utils.getRandomIndexOfArray(Libraries.TextConstants.RepromptHeaderSpeakText);
        let randomPosition = Libraries.Utils.getRandomIndexOfArray(Libraries.TextConstants.RepropmtSpeakText);
        return Libraries.TextConstants.RepromptHeaderSpeakText[randomPositionHeader] + Libraries.TextConstants.RepropmtSpeakText[randomPosition];
    }

    /**
     * Función getSpeakText: Retorna el speak text de Alexa de forma automática.
     * @param  {Attributes} attributes
     * @param  {} speakText
     * @param  {} repromptText
     * @param  {} speakTextScreen
     * @param  {} repromptTextScreen
     * @returns {Attributes} attributes
     */
    static async getSpeakText(attributes = new Attributes().init(attributes), speakText, repromptText, speakTextScreen, repromptTextScreen) {
        attributes.voiceResponse.speakTextScreen = speakTextScreen == undefined ? '' : speakTextScreen;
        attributes.voiceResponse.repromptTextScreen = repromptTextScreen == undefined ? this.getRepromptText() : repromptTextScreen;
        attributes.voiceResponse.speakText = speakText == undefined ? '' : speakText;
        attributes.voiceResponse.repromptText = repromptText == undefined ? this.getRepromptText() : repromptText;
        return Promise.resolve(attributes);
    }

    /**
     * Función getErrorText: Retorna el error de la arquitectura VIP.
     * @param  {Attributes} attributes
     * @returns {Attributes} attributes
     */
    static async getErrorText(attributes = new Attributes().init(attributes)) {
        switch (attributes.errorVIP.errorType) {
            case '':
                attributes.voiceResponse.speakTextScreen = Libraries.TextConstants.ErrorSpeakText;
                attributes.voiceResponse.repromptTextScreen = Libraries.UtilsVIP.getRepromptText();
                attributes.voiceResponse.speakText = Libraries.TextConstants.ErrorSpeakText;
                attributes.voiceResponse.repromptText = Libraries.UtilsVIP.getRepromptText();
                break;
            default:
                attributes.voiceResponse.speakTextScreen = Libraries.TextConstants.ErrorSpeakText;
                attributes.voiceResponse.repromptTextScreen = Libraries.UtilsVIP.getRepromptText();
                attributes.voiceResponse.speakText = Libraries.TextConstants.ErrorSpeakText;
                attributes.voiceResponse.repromptText = Libraries.UtilsVIP.getRepromptText();
                break;
        }

        return Promise.resolve(attributes);
    }

    /**
     * Función getErrorText: Retorna el error de la arquitectura VIP.
     * @param  {Attributes} attributes
     * @returns {Attributes} attributes
     */

    static async getAPLServerVersionName(input, name) {

        console.VIPLog('getAPLServerVersionName INIT');

        try {

			let inputString = JSON.stringify(input);
			let replaceServer = inputString.split("[APL_SERVER]").join((process.env.APL_SERVER === "DEV")?Libraries.APLConstants.S3ServerDEV:(process.env.APL_SERVER === "PRE")?Libraries.APLConstants.S3ServerPRE:Libraries.APLConstants.S3ServerPRO);
			let replaceVersion = replaceServer.split("[APL_VERSION]").join(process.env.APL_VERSION);
			let replaceName = replaceVersion.split("[APL_NAME]").join(name);
			
            return JSON.parse(replaceName);

        } catch (error) {
            console.VIPError('getAPLServerVersionName try error')
            throw new Error(error);
        }
    }
}

module.exports = UtilsVIP;