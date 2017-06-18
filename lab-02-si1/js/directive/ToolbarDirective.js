/**
 * Diretiva responsável pela toolbar.
 */
app.directive('mainToolbar', ['$state', '$rootScope',
    function ($state, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'view/toolbar.html',
            link: function (scope, element, attrs) {
                const WATCHLIST_STATE = 'watchlist';
                const PROFILE_STATE = 'profile';
                const HOME_STATE = 'home';
                const STATE_NAME = {
                    home: 'Página inicial',
                    profile: 'Perfil',
                    watchlist: 'Watchlist'
                };

                /**
                 * @return State atual.
                 */
                scope.getCurrentStateName = () => {
                    return $state.current.name;
                };

                /**
                 * Retorna o nome a ser mostrado de acordo com o state.
                 * @param realName nome real do state.
                 * @return Nome do estado.
                 */
                scope.getStateName = (realName) => {
                    return STATE_NAME[realName];
                };

                scope.go = $state.go;

                /**
                 * Recupera todos os estados disponíveis para se ir.
                 * @return Lista de estados disponíveis.
                 */
                scope.getStates = () => {
                    const allStates = Object.keys(STATE_NAME).sort((a, b) => {
                        return a > b ? 1 : a < b ? -1 : 0;
                    });
                    return allStates.filter(elem => {
                        if (elem === scope.getCurrentStateName()) {
                            return false;
                        }
                        return true;
                    });
                }
            }
        };
    }
]);