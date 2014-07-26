var fstNameSpace = angular.module("myApp3",[]);
fstNameSpace.controller("myController3",function nakeController($scope,$http){
    $http.get("/lib/js/data.json").success(function(data){
        $scope.artists = data;
    });
});
