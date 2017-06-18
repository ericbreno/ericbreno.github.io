/**
 * Diretiva responsável por mostrar a listagem de séries.
 * @param seriesList lista de séries a ser mostrada
 * @param viewDetails Função que exibe os detalhes da série.
 * @param removeSeries Função que remove a série de uma determinada lista.
 * @param isUserView Flag para indicar se está na visualização da tela do usuário.
 * @param isWatchList Flag para indicar se está na visualizaçã da tela de watchlist.
 */
seriesModule.directive('seriesListing', ['UserService', 'ModalService', 'OMDbService', '$rootScope', function (UserService, ModalService, OMDbService, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'view/seriesListing.html',
        scope: {
            seriesList: '=',
            viewDetails: '=?',
            removeSeries: '=?',
            isUserView: '=?',
            isWatchlist: '=?'
        },
        link: (scope, element, attr) => {
            const loggedUser = UserService.getLoggedUser();
            /**
             * Adiciona a série a lista do usuário logado.
             * @param series Série a ser adicionada.
             */
            scope.addToUser = series => {
                if (loggedUser.hasInWatchlist(series.imdbID)) {
                    ModalService.confirm(`Remover ${series.title} do watchlist?`).then(() => {
                        callbackAddToSeries(series);
                    });
                } else {
                    callbackAddToSeries(series);
                }
            };

            function callbackAddToSeries(series) {
                OMDbService.getSeries(series.imdbID).then(seriesToAdd => {
                    const added = loggedUser.addSeries(seriesToAdd);
                    if (!added) {
                        ModalService.showAlert("Série já presente no perfil.");
                    }

                });
            }

            /**
             * Adiciona a série ao watchlist do usuário.
             * @param series Série a ser adicionada.
             */
            scope.addToWatchlist = series => {
                if (loggedUser.hasInSeries(series.imdbID)) {
                    ModalService.confirm(`Remover ${series.title} do perfil?`).then(() => {
                        callbackAddToWatchlist(series);
                    });
                } else {
                    callbackAddToWatchlist(series);
                }
            };

            function callbackAddToWatchlist(series) {
                OMDbService.getSeries(series.imdbID).then(seriesToAdd => {
                    const added = loggedUser.addToWatchlist(seriesToAdd);
                    if (!added) {
                        ModalService.showAlert("Série já presente na watchlist.");
                    }
                });
            }

            /**
             * Indica se existem séries na listagem.
             * @return True caso hajam.
             */
            scope.hasSeries = () => {
                return scope.seriesList.length > 0;
            };

            /**
             * Mostra os detalhes da série, recebida por parâmetro.
             */
            scope.viewDetails = scope.viewDetails || function () {};

            scope.colors = $rootScope.colors;
        }
    };
}]);