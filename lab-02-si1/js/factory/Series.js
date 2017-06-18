/**
 * Factory que representa a entidade de Series.
 */
seriesModule.factory('Series', [function () {

    const DEFAULT_POSTER = 'img/no_poster.gif';

    /**
     * Construtor.
     * @param data Dados a se criar a factory.
     */
    const Series = function (data) {
        this.title = data.Title;
        this.year = data.Year;
        this.imdbID = data.imdbID;
        this.plot = data.Plot;
        this.rated = data.Rated;
        this.imdbRating = data.imdbRating;
        
        this.posterUrl = data.Poster;
        if (this.posterUrl === "N/A") {
            this.posterUrl = DEFAULT_POSTER;
        }
    };

    Series.prototype.constructor = Series;

    return Series;
}]);