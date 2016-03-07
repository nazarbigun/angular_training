/**
 * Created by Z on 06.03.2016.
 */
angular.module("myApp")
    .factory('forecastLviv', ['$http', function($http) {
    return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=49b8b1fcf024d0e19d6bd2bccb355119')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}])
.factory('forecastKyiv', ['$http', function($http) {
    return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=49b8b1fcf024d0e19d6bd2bccb355119')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}])
.factory('forecastFrankivsk', ['$http', function($http) {
    return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Frankivsk&appid=49b8b1fcf024d0e19d6bd2bccb355119')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);