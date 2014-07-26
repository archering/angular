var fstNameSpace = angular.module("myApp4",[]);
fstNameSpace.controller("myController4",['$scope','$http',function($scope,$http){
    $http.get("/lib/js/data.json").success(function(data){
        $scope.artists = data;
        $scope.artistsOrder = 'name';
        $scope.limi = data.length;
        $scope.max = data.length;
    });
}]);
