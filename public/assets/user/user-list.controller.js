angular.module('fh.user').controller('UserListCtrl', function($rootScope, $scope, $location, $mdDialog, User, $stateParams) {
  $scope.loading = false;
  $scope.users = User.query();
  return $scope.go = function(path) {
    return $location.path(path);
  };
});
