module.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'app/views/pages/Home.html',
                controller: 'RouteController'
            }).
            when('/about', {
                templateUrl: 'app/views/pages/About.html',
                controller: 'RouteController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

module.controller("RouteController", function ($scope) {

})