shoeApp.controller("mainController", function ($route, $scope, $rootScope) {
    $scope.setActive = function (event) {
        var links = document.querySelectorAll('#nav a');
        for (var x = 0; x < links.length; x++) {
            links[x].className = "";
        }
        angular.element(event.target).addClass("active");
    };

})