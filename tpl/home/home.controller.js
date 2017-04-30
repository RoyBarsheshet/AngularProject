shoeApp.controller("homeController", function ($rootScope, $scope, $route, $http) {
    $rootScope.title = $route.current.$$route.pageTitle;

    $http({
        method: 'GET',
        url: 'core/shoes.json'
    })
        .then(function SuccessCallback(response) {
            $scope.shoes = shoeCache = response.data;
            $scope.categories = getCategories($scope.shoes);
        }, function errorCallback(response) {
            console.log("ERROR READING FILE!!!");
        });

    /************************************ Sort by price (high to low , low to high) **************************/

    $scope.sortShoes = "+shoeName";

    $scope.sortByPrice = function (by) {
        $scope.sortShoes = by;
        $('#sort-price-links li span').removeClass('price-active font-weight-bold');
        $(event.target).addClass('price-active font-weight-bold');
    };

    /*********************************** Categories filter ***************************************************/
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

