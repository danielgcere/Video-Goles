'use strict';

//Constantes de VIP.
const Attributes = require('../Classes/Attributes');
const Apl = require('../Classes/Apl');
const Libraries = require('../Base/Libraries');

/**
 * Función getAPL: encargada de obtener el APL correspondiente.
 * @param  {Attributes} attributes
 * @param  {Apl} apl
 * @returns {Attributes} attributes
 */
async function getAPL(attributes = new Attributes().init(attributes), apl = new Apl().init(apl)) {
    console.VIPLog('attributes: ' + JSON.stringify(attributes, null, 4));
    try {
        console.VIPLog('APL Case: ' + apl.aplIntentView);
        switch (apl.aplIntentView) {
            case 'LaunchRequest':
                await getLaunchView(attributes, apl);
                break;
            case 'SessionEndedRequest':
            case 'AMAZON.CancelIntent':
            case 'AMAZON.StopIntent':
            case 'Restart':
            case 'Help':
            case 'SillyStuff':
            case 'Gratitude':
            case 'Hate':
            case 'ComingSoon':
            case 'NoFutureFuncionalities':
            case 'Greetings':
                await getBackGroundView(attributes, apl);
                break;
            default:
                console.VIPLog('APL Case: Default');
                await getBackGroundView(attributes, apl);
                break;
        }

        apl.datasource = await Libraries.UtilsVIP.getAPLServerVersionName(apl.datasource, attr);
        apl.template = require('../APL/APLInflate.json');
        apl.template = await Libraries.UtilsVIP.getAPLServerVersionName(apl.template, attr);

        return Promise.resolve(attributes);

    } catch (error) {
        console.VIPError('getAPL try error: ' + error);
        attributes.speakText = Libraries.TextConstants.ErrorSpeakText;
        attributes.repromptText = Libraries.UtilsVIP.getRepromptText();
        return Promise.resolve(attributes);
    }
}

/**
 * Función getBackGroundView: encargada de obtener el APL del background.
 * @param  {Attributes} attributes
 * @param  {Apl} apl
 * @returns {Attributes} attributes
 */
async function getLaunchView(attributes = new Attributes().init(attributes), apl = new Apl().init(apl)) {
    try {
        console.VIPLog('APL getLaunchView INIT');
        apl.datasource = require('../APL/LaunchData.json');
        apl.name = 'LaunchTemplate';
        console.VIPLog('APL getLaunchView END');
        return Promise.resolve(attributes);
    } catch (error) {
        console.VIPError('getLaunchView try error: ' + error);
        throw new Error(error);
    }
}

/**
 * Función getBackGroundView: encargada de obtener el APL del background.
 * @param  {Attributes} attributes
 * @param  {Apl} apl
 * @returns {Attributes} attributes
 */
async function getBackGroundView(attributes = new Attributes().init(attributes), apl = new Apl().init(apl)) {
    try {
        console.VIPLog('APL getBackGroundView INIT');
        apl.datasource = require('../APL/BackgroundData.json');
        console.VIPLog('APL getBackGroundView END');
        return Promise.resolve(attributes);
    } catch (error) {
        console.VIPError('getBackGroundView try error: ' + error);
        throw new Error(error);
    }
}

module.exports.getAPL = getAPL;