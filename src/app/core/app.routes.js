(function(){
    'use strict';

    var core = angular.module('app.routes', ['ui.router']);

    core.config(configure);
    configure.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configure($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");

        $stateProvider
        .state('/', {
            url: "/",
            templateUrl: "./templates/pages/about.html"
        });
    }
}());