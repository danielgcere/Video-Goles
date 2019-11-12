/**
 * Clase GetAllBookingByFFData: encargada de manejar los datos proporcionados por la  API GetAllBookingByFF.
 */
module.exports = class ListMatch {

    constructor() {
        this.title = '';
        this.date = '';
        this.competition = '';
    }
    clear() {
        this.title = '';
        this.date = '';
        this.competition = '';
    }
    init(values) {
        this.title = values.title;
        this.date = values.date;
        this.competition = values.competition.name;
        return this;
    }
    initAPI(values) {
        this.title = values.title;
        this.date = values.date;
        this.competition = values.competition.name;
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}

