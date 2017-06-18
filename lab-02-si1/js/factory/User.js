/**
 * Factory que representa a entidade de Usuário.
 */
userModule.factory('User', [function () {

    /**
     * Construtor.
     */
    const User = function () {
        this.seriesList = [];
        this.watchlist = [];
    };

    /**
     * Adiciona uma série a lista de séries do usuário, se a mesma não já
     * estiver presente.
     * 
     * Se uma série for adicionada ao perfil, a mesma é removida do watchlist.
     * @return True se a série for adicionada com sucesso.
     */
    User.prototype.addSeries = function (series) {
        const id = series.imdbID;
        if (containsSeries(this.seriesList, id)) {
            return false;
        }
        if (containsSeries(this.watchlist, id)) {
            this.removeUserWatchlist(indexOf(this.watchlist, id));
        }
        this.seriesList.push(series);
        return true;
    };

    /**
     * Adiciona uma série ao watchlist do usuário, se a mesma não já
     * estiver presente.
     * 
     * Se uma série for adicionada ao watchlist ela é removida do perfil.
     * @return 
     */
    User.prototype.addToWatchlist = function (series) {
        const id = series.imdbID;
        if (containsSeries(this.watchlist, id)) {
            return false;
        }
        if (containsSeries(this.seriesList, id)) {
            this.removeUserSeries(indexOf(this.seriesList, id));
        }
        this.watchlist.push(series);
        return true;
    }

    /**
     * Recupera a lista de séries do usuário.
     * @return Array com as séries do usuário.
     */
    User.prototype.getSeries = function () {
        return this.seriesList;
    };

    User.prototype.getWatchlist = function () {
        return this.watchlist;
    }

    /**
     * Remove uma série de um dado índice do usuário.
     * @param index Indice da série a ser removida.
     */
    User.prototype.removeUserSeries = function (index) {
        this.seriesList.splice(index, 1);
    };

    /**
     * Remove uma série do watchlist de um dado índice do usuário.
     * @param index Indice da série a ser removida.
     */
    User.prototype.removeUserWatchlist = function (index) {
        this.watchlist.splice(index, 1);
    };

    User.prototype.hasInWatchlist = function (id) {
        return containsSeries(this.watchlist, id);
    };

    User.prototype.hasInSeries = function (id) {
        return containsSeries(this.seriesList, id);
    };

    function containsSeries(list, id) {
        return indexOf(list, id) !== -1;
    }

    function indexOf(list, id) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].imdbID === id) {
                return i;
            }
        }
        return -1;
    }

    User.prototype.constructor = User;
    return User;
}]);