angular.module('fh.bid').controller('BidListCtrl', function($rootScope, $scope, $location, $mdDialog, Bid, $stateParams) {
  $scope.loading = false;
  $scope.bids = Bid.query();
  $scope.onSwipeRight = function(path) {
    return $location.path(path);
  };
  return $scope.go = function(path) {
    return $location.path(path);
  };
});
