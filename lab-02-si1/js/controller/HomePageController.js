/**
 * Controller responsável pela página de busca.
 */
searchModule.controller('HomePageController', ['OMDbService', 'ModalService', function (OMDbService, ModalService) {
    let series = [];
    let lastSearch = '';

    /**
     * Realiza a busca de séries, atualizando a lista.
     * @param name Nome a ser buscado.
     */
    this.findSeries = name => {
        const successCallback = data => {
            series = data.data;
            if (series.length === 0) {
                ModalService.showAlert(`Nenhuma série foi encontrada para ${lastSearch || ''}.`);
            }
        };

        lastSearch = name;
        return OMDbService.findSeries(name)
            .then(successCallback)
            .catch(error => {
                series = [];
            });
    };

    /**
     * Retorna as séries buscadas.
     */
    this.getSeries = () => {
        return series;
    };
}]);