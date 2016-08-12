(function(){
    'use strict';

    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);
    
    mainCtrl.$inject = ['$scope'];

    function mainCtrl($scope){
        var vm  = this;

        function activate(){
            console.log('main page');
        }

        activate();
        //sdfds
    }
}());