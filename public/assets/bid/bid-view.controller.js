angular.module('fh.bid').controller('BidViewCtrl', function($rootScope, $scope, $location, $mdDialog, Bid, $stateParams) {
  $scope.loading = false;
  $scope.bid = Bid.get({
    id: $stateParams.id
  });
  $scope.view = function() {
    return $location.path("bids/" + $scope.bid._id);
  };
  $scope.add = function() {
    return $location.path("bids/new");
  };
  return $scope["delete"] = function() {
    if (confirm("Delete?")) {
      return $scope.fish.$delete(function() {
        $location.path("bids");
      });
    } else {

    }
  };
});
