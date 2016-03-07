/**
 * Created by Z on 06.03.2016.
 */
angular.module('myApp')
    .factory('Forecast', ['$http', function ($http) {
        return {
            rslt: $http.get('http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=49b8b1fcf024d0e19d6bd2bccb355119')
        }
        /*}])
         .factory('forecast', ['$http', function ($http) {
         return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=49b8b1fcf024d0e19d6bd2bccb355119')
         .success(function (data) {
         return data;
         })
         .error(function (err) {
         return err;
         });
         }])
         .factory('forecast', ['$http', function ($http) {
         return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Frankivsk&appid=49b8b1fcf024d0e19d6bd2bccb355119')
         .success(function (data) {
         return data;
         })
         .error(function (err) {
         return err;
         });*/
    }])
    .factory('Temperatures', ['$http', function ($http) {
        return {
            temperatureArray: $http.get('http://localhost:8081/temperatures')
        }
    }])
;