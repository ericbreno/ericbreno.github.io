/**
 * Service responsável pela conexão com a API do OMDb.
 */
OMDBModule.service('OMDbService', ['$http', 'Series', function ($http, Series) {
    const self = this;

    const API_KEY = '93330d3c';
    const RETURN_JSON_PARAM = '&r=json';
    const DATA_ENDPOINT = `http://www.omdbapi.com/?apikey=${API_KEY}${RETURN_JSON_PARAM}`;
    const TITLE_SEARCH_PARAM = '&s=';
    const TYPE_PARAM = '&type=';
    const SERIES_PARAM = `${TYPE_PARAM}series`;
    const ID_PARAM = '&i=';

    const SEARCH_SERIES_NAME_ENDPOINT = `${DATA_ENDPOINT}${SERIES_PARAM}${TITLE_SEARCH_PARAM}`;
    const GET_SERIES_ID_ENDPOINT = `${DATA_ENDPOINT}${ID_PARAM}`;

    /**
     * Recupera os dados de uma série por seu id.
     * @param id Id da série.
     * @return Serie consultada.
     */
    this.getSeries = id => {
        const getUri = `${GET_SERIES_ID_ENDPOINT}${id}`;
        return $http.get(getUri).then(data => {
            const series = new Series(data.data);
            return series;
        });
    };

    /**
     * Busca série por nome.
     * @param name Nome a ser buscado.
     * @return Promise com resultado da requisição.
     */
    this.findSeries = (name) => {
        const searchUri = `${SEARCH_SERIES_NAME_ENDPOINT}${name}`;
        return $http.get(searchUri)
            .then(json => {
                const result = {};
                result.data = createSeriesList(json.data.Search);
                return result;
            });
    };

    /**
     * Converte a lista recebida da requisição em uma lista de objetos
     * Series.
     * @param jsonSeries Lista recebida da requisição.
     * @return Lista de objetos Series.
     */
    const createSeriesList = (jsonSeries) => {
        const result = [];
        if (jsonSeries && jsonSeries.length > 0) {
            jsonSeries.forEach(elem => {
                const serie = new Series(elem);
                result.push(serie);
            });
        }
        return result;
    };
}]);