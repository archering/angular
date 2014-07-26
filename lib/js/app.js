/****
    变量名  最好和  第一个参数 “myApp” 相同，否则有问题
    这个 module 用来处理整个应用的 引导启动
**/
var myApp = angular.module("myApp",[
    'ngRoute',//  告诉引导程序，这个应用，会用到 ngRoute 指令，和 controllerSpace module
    'controllerSpace'
]);

/***
    引导程序的配置
    使用service： $routeProvider
    $routeProvider 处理 外部的 html片段，
**/
myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/list',{// 当连接地址，出现锚点  angular_partials_8.html#/list  时，使用模板
        templateUrl:'partials/list.html',
        controller:'ListController'// 这个模板对应的处理，交给 controller： ListController 来
    }).
    when('/details/:itemId',{
        templateUrl:'partials/details.html',
        controller:'DetailsController'
    }).
    otherwise({//else
        redirectTo:'/list'
    });
}]);
