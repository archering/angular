var controllerSpace = angular.module("controllerSpace",[]);//定义一个命名空间
//一个命名空间下，可以有多个controller， controller 的名字首字母最好大写，
controllerSpace.controller("ListController",['$scope','$http',function($scope,$http){
    $http.get("/lib/js/data.json").success(function(data){
        $scope.artists = data;
        $scope.artistsOrder = 'name';
        $scope.limi = data.length;//view 需要的是数字类型，所以这里必须是数字
    });
}]);

controllerSpace.controller("DetailsController",['$scope','$http','$routeParams',function($scope,$http,$routeParams){//第三个参数，地址栏参数
    $http.get("/lib/js/data.json").success(function(data){
        $scope.artists = data;
        $scope.whichItem = $routeParams.itemId;
        if(Number($routeParams.itemId)>=data.length-1){
            $scope.prevItem =Number($routeParams.itemId) -1;
            $scope.nextItem =0;
        }else{
            if(Number($routeParams.itemId) > 0){
                $scope.prevItem =Number($routeParams.itemId) -1;
                $scope.nextItem =Number($routeParams.itemId) +1;
            }else{
                $scope.prevItem =data.length-1;
                $scope.nextItem =Number($routeParams.itemId) -1;
            }
        }
    });
}]);
