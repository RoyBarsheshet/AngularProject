'use strict';

 shoeApp.controller("aboutController", function ($rootScope, $route) {
    $rootScope.title = $route.current.$$route.pageTitle;
 });
