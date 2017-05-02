shoeApp.controller('bannerController',function ($scope, $http,$sce,$sanitize){
    $http({
        method: 'GET',
        url: 'core/tpl-core/banner.html'
    }).then(function success(response) {
        $scope.html = response.data;
        $scope.content = $sce.html(html);

    }, function error(response) {
        console.log('response Error Reading Banner.html')
    })

    })