/**
 * Created by Z on 06.03.2016.
 */
'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);