'use strict';

//Constantes de VIP.
const Attributes = require('../Classes/Attributes');
const Libraries = require('../Base/Libraries');

/**
 * Función getLaunchRequestMessage: encargada de devolver el mensaje de bienvenida.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getLaunchRequestMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getLaunchRequestMessage INIT');
            let randomPosition = Libraries.Utils.getRandomIndexOfArray(Libraries.TextConstants.LaunchRequestSpeakTextScreen);
            await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.LaunchRequestSpeakText[randomPosition], undefined, Libraries.TextConstants.LaunchRequestSpeakTextScreen[randomPosition], undefined);
            console.VIPLog('getLaunchRequestMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getLaunchRequestMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

/**
 * Función getSessionEndedRequestMessage: encargada de devolver el mensaje de despedida.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getSessionEndedRequestMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getSessionEndedRequestMessage INIT');
            attributes.clear();
            attributes.session.withShouldEndSession = true;
            await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.SessionEndedSpeakText);
            console.VIPLog('getSessionEndedRequestMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getSessionEndedRequestMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

/**
 * Función getRestartMessage: encargada de devolver el mensaje de reinicio del flujo.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getRestartMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getRestartMessage INIT');
            attributes.clear();
            await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.RestartSpeakText);
            console.VIPLog('getRestartMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getRestartMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

/**
 * Función getHelpMessage: encargada de devolver el mensaje de ayuda.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getHelpMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getHelpMessage INIT');
            await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.HelpSpeakText);
            console.VIPLog('getHelpMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getHelpMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

/**
 * Función getRepeatMessage: encargada de devolver el mensaje anterior.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getRepeatMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getRepeatMessage INIT');
            await Libraries.UtilsVIP.getSpeakText(attributes, attributes.voiceResponse.speakText, attributes.voiceResponse.repromptText, attributes.voiceResponse.speakTextScreen, attributes.voiceResponse.repromptTextScreen);
            console.VIPLog('getRepeatMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getRepeatMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

/**
 * Función getSillyStuffMessage: encargada de devolver el mensaje del fallback.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getSillyStuffMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getSillyStuffMessage INIT');
            if (attributes.session.errorRepeatTimes == 0) {
                await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.SillyStuffSpeakText[0]);
            }
            else {
                await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.SillyStuffSpeakText[1]);
            }
            attributes.session.errorRepeatTimes += 1;
            console.VIPLog('getSillyStuffMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getSillyStuffMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

/**
 * Función getGratitudeMessage: encargada de devolver el mensaje de agradecimiento.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getGratitudeMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getGratitudeMessage INIT');
            await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.GratitudeSpeakText);
            console.VIPLog('getGratitudeMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getGratitudeMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

/**
 * Función getHateMessage: encargada de devolver el mensaje de odio.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getHateMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getHateMessage INIT');
            await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.HateSpeakText);
            console.VIPLog('getHateMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getHateMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

/**
 * Función getComingSoonMessage: encargada de devolver el mensaje de futuras funcionalidades.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getComingSoonMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getComingSoonMessage INIT');
            await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.ComingSoonSpeakText);
            console.VIPLog('getComingSoonMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getComingSoonMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

/**
 * Función getNoFutureFuncionalitiesMessage: encargada de devolver el mensaje de funcionalidades que no soportará la Skill.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getNoFutureFuncionalitiesMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getNoFutureFuncionalitiesMessage INIT');
            await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.NoFutureFuncionalitiesSpeakText);
            console.VIPLog('getNoFutureFuncionalitiesMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getNoFutureFuncionalitiesMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}


/**
 * Función getGreetingsMessage: encargada de devolver el mensaje de saludos.
 * @param  {Attributes} attributes
 * @returns {Attributes} attributes
 */
async function getGreetingsMessage(attributes = new Attributes().init(attributes)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        try {
            console.VIPLog('getGreetingsMessage INIT');
            await Libraries.UtilsVIP.getSpeakText(attributes, Libraries.TextConstants.GreetingsSpeakText);
            console.VIPLog('getGreetingsMessage ENDED');
            return Promise.resolve(attributes);
        } catch (error) {
            console.VIPError('getGreetingsMessage try error: ' + error);
            throw new Error(error);
        };
    } catch (error) {
        await Libraries.UtilsVIP.getErrorText(attributes);
        return Promise.resolve(attributes);
    }
}

module.exports.getLaunchRequestMessage = getLaunchRequestMessage;
module.exports.getSessionEndedRequestMessage = getSessionEndedRequestMessage;
module.exports.getRestartMessage = getRestartMessage;
module.exports.getHelpMessage = getHelpMessage;
module.exports.getRepeatMessage = getRepeatMessage;
module.exports.getSillyStuffMessage = getSillyStuffMessage;
module.exports.getGratitudeMessage = getGratitudeMessage;
module.exports.getHateMessage = getHateMessage;
module.exports.getComingSoonMessage = getComingSoonMessage;
module.exports.getNoFutureFuncionalitiesMessage = getNoFutureFuncionalitiesMessage;
module.exports.getGreetingsMessage = getGreetingsMessage;