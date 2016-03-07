angular.module('myApp', [])
    .controller('myCtrl', ['$scope', '$http', 'Forecast', 'Temperatures', function ($scope, $http, Forecast, Temperatures) {

        $scope.responseResult = "asd";

        $scope.weatherFn = function () {

            return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=49b8b1fcf024d0e19d6bd2bccb355119')
                .success(function (data) {
                    console.log(data);
                    return data;
                })
                .error(function (err) {
                    console.log(err);
                    return err;
                });
        }

        $scope.weatherService = function () {
            Forecast.rslt
                .success(function (data) {
                    console.log("DATA: " + data);
                    return data;
                })
                .error(function (err) {
                    console.log("ERR: " + err.message);
                    return err;
                })
        }

        $scope.temps = function () {
            var results = [];
            Temperatures.temperatureArray
                .success(function (data) {
                    results = data;
                    console.log(results);
                })
                .error(function (err) {
                    console.log(err.message);
                })
            var date = new Date(results[1]);
            console.log(date);
        }

    }]);
