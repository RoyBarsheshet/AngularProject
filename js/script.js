var shoeCache = null;
var shoeApp = angular.module("shoeModule", ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider
                .when("/home",
                    {
                        templateUrl: "tpl/home.html",
                        controller: "homeController",
                        pageTitle: "Welcome"
                    })
                .when("/about",
                    {
                        templateUrl: "tpl/about.html",
                        controller: "aboutController",
                        pageTitle: "About"
                    })
                .when("/contactUs",
                    {
                        templateUrl: "tpl/contactUs.html",
                        controller: "contactUsController",
                        pageTitle: "Contact US"
                    })
                .when("/product/:shoeID",
                    {
                        templateUrl: "tpl/product.html",
                        controller: "productController",
                        pageTitle: "{{shoeName}}"
                    })
                .otherwise({redirectTo: "/home"});
        })

        //---------------Add and remove active class from nav button-----------//
        .controller("mainController", function ($route, $scope, $rootScope) {
            $scope.setActive = function (event) {
                //
                //         var links = document.querySelectorAll('.Layer_19 ul li a');
                //         for (var x = 0; x < links.length; x++) {
                //             links[x].className = "";
                //         }
                //         angular.element(event.target).parent().addClass("active");
                //     };
                var links = document.querySelectorAll('#nav a');

                for (var x = 0; x < links.length; x++) {
                    links[x].className = "";
                    // console.log(links[1]);
                }
// console.log(event);
                angular.element(event.target).addClass("active");
            };

        })

        //---------------------controllers------------------------//
        .controller("homeController", function ($rootScope, $scope, $route, $http) {
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
                });
            $scope.sortShoes = "+shoeName";

            $scope.sortByPrice = function (by) {
                $scope.sortShoes = by;
                this.clearSortPrice();
                event.target.idName = "HtoL";

            };
            $scope.sortShoes = "+shoeName";

            $scope.sortByPrice = function (by) {
                $scope.sortShoes = by;
                this.clearSortPrice();
                event.target.idName = "HtoL";

            };

            $scope.clearSortPrice = function () {
                var links = document.querySelectorAll('#sort-price-links li a');
                for (var x = 0; x < links.length; x++) {
                    links[x].className = "";
                }

            };
            $scope.filterCategories = function () {
                var data = [];

                for (var i = 0; i < $scope.categories.length; i++) {
                    for (var x = 0; x < shoeCache.length; x++) {
                        if ($scope.categories[i] == shoeCache[x].shoeCategory) {
                            if ($scope[$scope.categories[i]] === true) {
                                data.push(shoeCache[x]);
                            }
                        }
                    }
                }
                $scope.shoes = (data.length > 0) ? data : shoeCache;

            };
            $scope.filterTypeOF = function () {
                var data2 = [];

                for (var i = 0; i < $scope.TypeOF.length; i++) {
                    for (var x = 0; x < shoeCache.length; x++) {
                        if ($scope.TypeOF[i] == shoeCache[x].shoeType) {
                            if ($scope[$scope.TypeOF[i]] === true) {
                                data2.push(shoeCache[x]);
                            }
                        }
                    }
                }
                $scope.shoes = (data2.length > 0) ? data2 : shoeCache;

            };
        })

        .controller("aboutController", function ($rootScope, $route) {
            $rootScope.title = $route.current.$$route.pageTitle;
        })
        .controller("contactUsController", function ($rootScope, $route) {
            $rootScope.title = $route.current.$$route.pageTitle;
        })
        .controller("productController", function ($rootScope, $scope, $route, $http, $routeParams) {
            $http({
                method: 'GET',
                url: 'js/shoes.json'
            }).then(function successCallback(response) {
                var allShoes = response.data;
                $scope.shoe = getShoeDetails($routeParams.shoeID, allShoes);
                $rootScope.title = $scope.shoe.shoeName;

            }), function errorCallback(response) {
                console.log("ERROR");
            };
        })
;

function getShoeDetails(shoeID, allShoes) {
    for (var x = 0; x < allShoes.length; x++) {
        if (allShoes[x].shoeID == shoeID) {
            return allShoes[x];
        }
    }

};
function getCategories(shoes) {
    var categories = new Array();

    for (var x = 0; x < shoes.length; x++) {
        if (categories.indexOf(shoes[x].shoeCategory) == -1) {
            categories.push(shoes[x].shoeCategory);
        }
    }
    return categories;
}
// };
// function getTypeOF(shoes) {
//     var TypeOF = new Array();
//
//     for (var x = 0; x < shoes.length; x++) {
//         if (TypeOF.indexOf(shoes[x].shoeType) == -1) {
//             TypeOF.push(shoes[x].shoeType);
//         }
//     }
//     return TypeOF;
// }
// $scope.$watch('searchText.shoeName', function(shoeBrand)
// {
//     $scope.id = shoeBrand;
// });
