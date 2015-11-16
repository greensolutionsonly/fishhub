angular.module('fh.chat').controller('ChatCtrl', function($rootScope, $scope, $location, $mdDialog, $stateParams) {
  $scope.loading = false;
  $scope.chat = {};
  $scope.onSwipeRight = function(path) {
    return $location.path(path);
  };
  return $scope.go = function(path) {
    return $location.path(path);
  };
});
