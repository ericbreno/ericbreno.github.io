/**
 * Service responsável pela interface de usuário com o servidor.
 */
userModule.service('UserService', ['User', 'Series', function (User, Series) {
    const self = this;
    let loggedUser;

    /**
     * Realiza o login.
     */
    this.login = () => {
        loggedUser = new User();
    };

    /**
     * Retorna o usuário logado.
     */
    this.getLoggedUser = () => {
        return loggedUser;
    };

    /**
     * Main
     */
    (() => {
        self.login();
        // loggedUser.addSeries(new Series({
        //     "Title": "Two and a Half Men",
        //     "Year": "2003–2015",
        //     "Rated": "TV-14",
        //     "Released": "22 Sep 2003",
        //     "Runtime": "22 min",
        //     "Genre": "Comedy, Romance",
        //     "Director": "N/A",
        //     "Writer": "Lee Aronsohn, Chuck Lorre",
        //     "Actors": "Jon Cryer, Angus T. Jones, Conchata Ferrell, Charlie Sheen",
        //     "Plot": "A hedonistic jingle writer's free-wheeling life comes to an abrupt halt when his brother and 10-year-old nephew move into his beach-front house.",
        //     "Language": "English",
        //     "Country": "USA",
        //     "Awards": "Nominated for 2 Golden Globes. Another 29 wins & 70 nominations.",
        //     "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwMDU1MDExNl5BMl5BanBnXkFtZTcwOTAwMjYyOQ@@._V1_SX300.jpg",
        //     "Ratings": [{
        //         "Source": "Internet Movie Database",
        //         "Value": "7.1/10"
        //     }],
        //     "Metascore": "N/A",
        //     "imdbRating": "7.1",
        //     "imdbVotes": "207,457",
        //     "imdbID": "tt0369179",
        //     "Type": "series",
        //     "totalSeasons": "12",
        //     "Response": "True"
        // }));
    })();
}]);