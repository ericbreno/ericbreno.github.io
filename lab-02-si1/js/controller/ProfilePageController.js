/**
 * Controller responsável por a página inicial/de usuário.
 */
userModule.controller('ProfilePageController', ['OMDbService', 'UserService', 'ModalService', function (OMDbService, UserService, ModalService) {
    /**
     * Recupera as séries do usuário logado.
     * @return lista com as séries.
     */
    this.getUserSeries = () => {
        const loggedUser = UserService.getLoggedUser();
        return loggedUser.getSeries();
    };

    /**
     * @return True se o usuário possuir séries em sua lista.
     */
    this.hasSeries = () => {
        return this.getUserSeries().length > 0;
    };

    /**
     * Abre um modal com os detalhes da série.
     * @param series Série a ser visualizada.
     */
    this.viewDetails = series => {
        ModalService.viewSeries(series);
    };

    /**
     * Remove uma série da lista de perfil do usuário.
     * @param series Série a ser removida.
     */
    this.removeSeries = index => {
        const series = this.getUserSeries()[index];
        const loggedUser = UserService.getLoggedUser();
        ModalService.confirm(`Remover ${series.title}?`).then(() => {
            loggedUser.removeUserSeries(index);
        });
    };
}]);