/**
 * Clase GetAllBookingByFFData: encargada de manejar los datos proporcionados por la  API GetAllBookingByFF.
 */
module.exports = class Match {

    constructor() {
        this.title = '';
        this.url = '';
        this.thumbnailUrl = '';
        this.date = {
            string : '',
            year : '',
            month : '',
            day : '',
            hour : '',
            minutes : ''
        };
        this.competition = '';
        this.videos = [];
    }
    clear() {
        this.title = '';
        this.url = '';
        this.thumbnailUrl = '';
        this.date = {
            string : '',
            year : '',
            month : '',
            day : '',
            hour : '',
            minutes : ''
        };
        this.competition = '';
        this.videos = [];
    }
    init(values) {
        this.title = values.title;
        this.url = values.url;
        this.thumbnailUrl = values.thumbnail;
        this.date.year = values.date.year;
        this.date.month = values.date.month;
        this.date.day = values.date.day;
        this.date.hour = values.date.hour;
        this.date.minutes = values.date.minutes;        
        this.competition = values.competition.name;
        this.videos = values.videos;
        return this;
    }
    initAPI(values) {
        this.title = values.title;
        this.url = values.url;
        this.thumbnailUrl = values.thumbnail;
        this.date.string = values.date;
        this.competition = values.competition.name;
        this.videos = values.videos;
        return this;
    }
    initDate(values) {
        this.date.year = values.date.year;
        this.date.month = values.date.month;
        this.date.day = values.date.day;
        this.date.hour = values.date.hour;
        this.date.minutes = values.date.minutes;   
        return this;
    }
    toJSON() {
        return Object.getOwnPropertyNames(this).reduce((a, b) => {
            a[b] = this[b];
            return a;
        }, {});
    }
}

