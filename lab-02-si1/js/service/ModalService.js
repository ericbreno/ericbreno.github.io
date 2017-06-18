/**
 * Service responsável por mostrar modais e popups
 */
app.service('ModalService', ['$mdDialog', function ($mdDialog) {
    var self = this;

    /**
     * Mostra um modal de alerta simples com a mensagem
     * passada.
     * @param message Mensagem a ser mostrada no modal.
     */
    this.showAlert = (message) => {
        const alert = $mdDialog.alert({
            title: 'Alerta',
            textContent: message,
            ok: 'Fechar'
        });

        return $mdDialog.show(alert);
    }

    /**
     * Abre um modal de confirmação.
     * @param message Mensagem a ser mostrada no modal.
     */
    this.confirm = message => {
        const alert = $mdDialog.confirm({
            title: 'Confirmar',
            textContent: message,
            ok: 'Sim',
            cancel: 'Não'
        });

        return $mdDialog.show(alert);
    };

    /**
     * Abre um modal com os detalhes da série.
     * @param series Série a ser apresentada.
     */
    this.viewSeries = series => {
        return $mdDialog.show({
            controller: 'viewSeriesController',
            controllerAs: 'viewSeriesCtrl',
            templateUrl: 'view/seriesDetails.html',
            locals: {
                series: series
            },
            parent: angular.element(document.body),
            clickOutsideToClose: true
        });
    };
}]);