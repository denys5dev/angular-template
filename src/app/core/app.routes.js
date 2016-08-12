(function(){
    'use strict';

    var core = angular.module('app.routes', ['ui.router']);

    core.config(configure);
    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider    ){
        $urlRouterProvider.otherwise("/");

        $locationProvider.html5Mode(true);

        $stateProvider
        .state('/', {
            url: "/",
            templateUrl: "./templates/pages/main.html",
            controller: 'mainCtrl as vm'
        })
         .state('about', {
            url: "/about",
            templateUrl: "./templates/pages/about.html"
            // controller: 'aboutCtrl as vm'
        })
         .state('contact', {
            url: "/contact",
            templateUrl: "./templates/pages/contact.html"
            // controller: 'contactCtrl as vm'
        });
    }
}());