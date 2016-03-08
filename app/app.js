var app = angular.module('myApp', [])
//    .controller('myCtrl', ['$scope', '$http','forecastLviv' , function ($scope, $http, forecastLviv) {
//
//        //$scope.responseResult = "asd";
//        //$scope.cityName = data.name;
//
//        $scope.responce =  $scope.forecastLviv.getWeather();
//
//        /*$scope.weatherFn = function () {
//
//            return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=d2cb869d812f9325e26ecdfe56860326')
//                .success(function (data) {
//                    console.log(data);
//                    return data;
//                })
//                .error(function (err) {
//                    console.log(err);
//                    return err;
//                });
//        }*/
//
//    }])
////    .factory('forecastLviv', ['$http', function($http) {
////    return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=49b8b1fcf024d0e19d6bd2bccb355119')
////        .success(function(data) {
////            console.log(data);
////            return data;
////        })
////        .error(function(err) {
////            console.log(data);
////            return err;
////        });
////}]);;

//todo: add propper API, clean mess of comments, make it pretty ;)