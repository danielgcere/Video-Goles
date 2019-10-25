'use strict';

/**
 * Clase APLConstants: encargada de manejar todos los textos utilizados por las respuestas directas.
 */
class APLConstants {
    /**
     * Función getConstants: Retorna los textos utilizados por las FAQs de la aplicación.
     */
    static getConstants() {
        return {

            S3ServerDEV: 'https://video-goles-dev.s3-eu-west-1.amazonaws.com',
            S3ServerPRE: 'https://video-goles-pre.s3-eu-west-1.amazonaws.com',
            S3ServerPRO: 'https://video-goles-pro.s3-eu-west-1.amazonaws.com',
           
        }
    }
}

module.exports = APLConstants;