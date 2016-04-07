
myModule.controller('zeroController', function ($scope, sharedService) {
    $scope.handleClick = function (msg) {
        sharedService.prepForBroadcast(msg);
    };

    $scope.$on('handleBroadcast', function () {
        $scope.message = sharedService.message;
    });
});