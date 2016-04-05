app.controller('personCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Jack";
    $scope.fullName = function () {
        var message = '';
        if ($scope.firstName == undefined || $scope.lastName == undefined) {
            return "First Name or Last Name is Empty";
        }
        return "Full Name : " + $scope.firstName + " " + $scope.lastName;
    };
});