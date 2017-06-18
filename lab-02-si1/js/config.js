'use strict';
const userModule = angular.module('userModule', []);
const seriesModule = angular.module('seriesModule', []);
const OMDBModule = angular.module('OMDbModule', []);
const searchModule = angular.module('searchModule', []);
const app = angular.module('siApp', ['ui.router', 'ngMaterial', 'seriesModule', 'OMDbModule', 'userModule', 'searchModule']);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$provide', '$httpProvider', function ($stateProvider, $locationProvider, $urlRouterProvider, $provide, $httpProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: 'view/profilePage.html',
            controller: 'ProfilePageController as profileCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'view/homePage.html',
            controller: 'HomePageController as homeCtrl'
        })
        .state('watchlist', {
            url: '/watchlist',
            templateUrl: 'view/watchlist.html',
            controller: 'WatchlistController as watchlistCtrl'
        });


    function loadingInterceptor($rootScope, $q) {
        var _openRequests_ = 0;
        return {
            request: function (config) {
                _openRequests_++;
                $rootScope.onRequest = true;
                return config || $q.when(config);
            },
            response: function (response) {
                if (!(--_openRequests_)) {
                    $rootScope.onRequest = false;
                }
                return response || $q.when(response);
            },
            responseError: function (response) {
                if (!(--_openRequests_)) {
                    $rootScope.onRequest = true;
                }
                return $q.reject(response);
            }
        };
    }

    $provide.factory('loadingInterceptor', ['$rootScope', '$q', loadingInterceptor]);

    $httpProvider.interceptors.push('loadingInterceptor');
}]);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.colors = {
        cardColor: {
            background: 'grey-300'
        },
        background: {
            background: 'grey-200'
        },
        topBar: {
            backgroundColor: 'purple-700'
        },
        searchBar: {
            background: 'grey-A100'
        },
        profileButton: {
            background: 'purple-600'
        },
        watchlistButton: {
            background: 'blue-700'
        }
    };
}]);