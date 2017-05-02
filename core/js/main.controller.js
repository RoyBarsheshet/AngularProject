shoeApp.controller("mainController", function ($route, $scope, $location, $rootScope) {
    // $scope.setActive = function (event) {
    //     var links = document.querySelectorAll('#nav a');
    //     for (var x = 0; x < links.length; x++) {
    //         links[x].removeClass("active");
    //     }
    //     angular.element(event.target).addClass("active");
    // };

    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }

        $('#carouselExampleIndicators').css('display','none');
        $('#carouselExampleIndicators').slideDown(2300);



})