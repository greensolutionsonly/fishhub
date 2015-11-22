angular.module('fh.fish').controller('FishListCtrl', function($rootScope, $scope, $location, $mdDialog, Fish, $stateParams) {
  $scope.loading = false;
  $scope.fishes = Fish.query();
  $scope.sortArray = {
    "sortPrice": "asc",
    "sortCreated": "desc",
    "sortQuantity": "asc"
  };
  $scope.sortItems = function(key) {
    $scope.setSortArray(key);
    return Fish.query($scope.sortArray);
  };
  $scope.setSortArray = function(key) {
    return $scope.sortArray[key] = $scope.sortArray[key] === "asc" ? 'desc' : 'asc';
  };
  $scope.sort = function(sortyby, sortorder) {
    return $scope.fishes = Fish.query();
  };
  $scope.onSwipeRight = function(path) {
    return $location.path(path);
  };
  $scope.go = function(path) {
    return $location.path(path);
  };
  return $scope.openMenu = function($mdOpenMenu, ev) {
    var originatorEv;
    originatorEv = ev;
    return $mdOpenMenu(ev);
  };
});
