var shoeCache = null;
var shoeApp = angular.module("shoeModule", ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider
                .when("/home",
                    {
                        templateUrl: "tpl/home/home.html",
                        controller: "homeController",
                        pageTitle: "Welcome"
                    })
                .when("/about",
                    {
                        templateUrl: "tpl/about/about.html",
                        controller: "aboutController",
                        pageTitle: "About"
                    })
                .when("/contactUs",
                    {
                        templateUrl: "tpl/contact_us/contactUs.html",
                        controller: "contactUsController",
                        pageTitle: "Contact US"
                    })
                .when("/product/:shoeID",
                    {
                        templateUrl: "tpl/product/product.html",
                        controller: "productController",
                        pageTitle: "{{shoeName}}"
                    })
                .otherwise({redirectTo: "/home"});
        })
;

function getShoeDetails(shoeID, allShoes) {
    for (var x = 0; x < allShoes.length; x++) {
        if (allShoes[x].shoeID == shoeID) {
            return allShoes[x];
        }
    }

}
function getCategories(shoes) {
    var categories = [];

    for (var x = 0; x < shoes.length; x++) {
        if (categories.indexOf(shoes[x].shoeCategory) == -1) {
            categories.push(shoes[x].shoeCategory);
        }
    }
    return categories;
}
