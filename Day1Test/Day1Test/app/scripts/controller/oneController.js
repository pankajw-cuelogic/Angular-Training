myModule.controller('oneController', function ($scope, sharedService) {
    $scope.$on('handleBroadcast', function () {
        $scope.message = 'Data from first controller : ' + sharedService.message;
    });
});