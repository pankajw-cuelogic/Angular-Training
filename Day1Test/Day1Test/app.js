var demoApp = angular.module('demoApp', ['ui.router']);
demoApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/parent");
    $stateProvider.state('parent', {
        url: '/parent',
        templateUrl: 'app/views/nestedviews/parent.html',
        controller: 'parentController'

    }).state('parent.child', {
        url: '/child',
        templateUrl: 'app/views/nestedviews/child.html',
        controller: 'childController'
    });
});