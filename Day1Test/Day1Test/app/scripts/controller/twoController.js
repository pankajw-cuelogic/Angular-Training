
myModule.controller('twoController', function ($scope, sharedService) {
    $scope.$on('handleBroadcast', function () {
        $scope.message = 'Data from second controller: ' + sharedService.message;
    });
});