angular.module('fh.bid').controller('BidListCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  Bid
  $stateParams
  ) ->

    $scope.loading=false
    $scope.bids = Bid.query()
    $scope.onSwipeRight = (path) ->
      $location.path(path)
    $scope.go = (path) ->
      $location.path(path)
)