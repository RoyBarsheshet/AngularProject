//header slider
// $('.Layer_6').css('display','none');
// $('.Layer_6').slideDown(1300);
var shoeCache = {};
var  shoeApp = angular.module("shoeModule",["ngRoute"])
    .config(function ($routeProvider) {
       $routeProvider
           .when("/",
               {
                   tamplateUrl:"tpl/home.html",
                   controller:"homeController",
                   pageTitle:"Welcome"
               })
           .when("/about",
               {
                   tamplateUrl:"tpl/about.html",
                   controller:"aboutController",
                   pageTitle:"About"
               })
           .when("/contactUs",
               {
                   tamplateUrl:"tpl/contactUs.html",
                   controller:"contactUsController",
                   pageTitle:"Contact US"
               })
           .when("/product",
               {
                   tamplateUrl:"tpl/product.html",
                   controller:"productController",
                   pageTitle:"Contact US"
               })
           .otherwise({redirectTo:"/"});
    })

    //---------------Add and remove active class from nav button-----------//
    .controller("mainController",function ($rootScope,$scope,$route) {
        $scope.setActive = function (event) {

            var links = document.querySelectorAll('.menu ul li a');
            for (var x = 0; x < links.length; x++) {
                links[x].className = "";
            }
            angular.elemnt(event.target).parent().addClass("active");
        };

    })

.controller("homeController",function ($rootScope,$scope,$route,$http) {
    $rootScope.title = $route.current.$$route.pageTitle;

    $http({
        method: 'GET',
        url: 'js/shoes.json'
    })
        .then(function SuccessCallback(response) {
            $scope.shoes = shoeCache = response.data;
            $scope.categories = getCategories($scope.shoes);

        }, function errorCallback(response) {
            console.log("ERROR READING FILE!!!");
        })

        .controller("aboutController", function ($rootScope, $scope, $route, $http) {
            $rootScope.title = $route.current.$$route.pageTitle;
        })
        .controller("contactUsController", function ($rootScope, $scope, $route, $http) {
            $rootScope.title = $route.current.$$route.pageTitle;
        })
        .controller("productController", function ($rootScope, $scope, $route, $http) {
            $rootScope.title = $route.current.$$route.pageTitle;
        });
});
