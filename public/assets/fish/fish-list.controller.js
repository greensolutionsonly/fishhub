angular.module('fh.fish').controller('FishListCtrl', function($rootScope, $scope, $location, $mdDialog, Fish, $stateParams) {
  $scope.loading = false;
  $scope.fishes = Fish.query();
  $scope.onSwipeRight = function(path) {
    return $location.path(path);
  };
  return $scope.go = function(path) {
    return $location.path(path);
  };
});
