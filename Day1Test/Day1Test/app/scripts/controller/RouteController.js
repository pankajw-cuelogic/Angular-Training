module.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'app/views/pages/Home.html',
                controller: 'routeController'
            }).
            when('/about', {
                templateUrl: 'app/views/pages/About.html',
                controller: 'routeController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

module.controller("routeController", function ($scope) {

})