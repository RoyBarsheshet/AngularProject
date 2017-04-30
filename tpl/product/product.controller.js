
shoeApp.controller("productController", function ($rootScope, $scope, $route, $http, $routeParams) {
    $http({
        method: 'GET',
        url: 'core/shoes.json'
    }).then(function successCallback(response) {
        var allShoes = response.data;
        $scope.shoe = getShoeDetails($routeParams.shoeID, allShoes);
        $rootScope.title = $scope.shoe.shoeName;

    }), function errorCallback(response) {
        console.log("ERROR " + response);
    };
})
