app.controller('MainController', ['$scope', 'forecastLviv', function($scope, forecastLviv) {
    forecastLviv.success(function(data) {
        $scope.responceforecastLviv = data;
    });
}]);
