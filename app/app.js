angular.module('myApp', []).
    controller('myCtrl', ['$scope', '$http', function ($scope, $http) {

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

    }]);
