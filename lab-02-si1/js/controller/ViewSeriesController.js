/**
 * Controller responsável pela listagem de séries.
 */
seriesModule.controller('viewSeriesController', ['series', function (series) {
    this.series = series;
}]);