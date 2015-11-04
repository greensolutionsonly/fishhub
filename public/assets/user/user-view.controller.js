angular.module('fh.user').controller('UserViewCtrl', function($rootScope, $scope, $location, $mdDialog, User, $stateParams, countries, roles) {
  $scope.loading = false;
  $scope.countries = countries;
  $scope.roles = roles;
  $scope.user = User.get({
    id: $stateParams.id
  });
  return $scope.edit = function() {
    return $location.path("users/" + $scope.user._id);
  };
});
