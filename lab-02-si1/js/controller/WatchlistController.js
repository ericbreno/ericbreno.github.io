/**
 * Controller responsável pela watchlist.
 */
seriesModule.controller('WatchlistController', ['UserService', function (UserService) {

    const loggedUser = UserService.getLoggedUser();

    /**
     * Recupera a watchlist do usuário logado.
     */
    this.getUserWatchlist = () => {
        return loggedUser.getWatchlist();
    };
}]);