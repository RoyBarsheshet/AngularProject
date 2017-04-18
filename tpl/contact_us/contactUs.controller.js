shoeApp.controller("contactUsController", function ($rootScope, $route) {
    $rootScope.title = $route.current.$$route.pageTitle;
})