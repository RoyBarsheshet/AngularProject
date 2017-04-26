
 shoeApp.controller("aboutController", function ($rootScope, $route) {
        $rootScope.title = $route.current.$$route.pageTitle;
        console.log($('body'));
    })
