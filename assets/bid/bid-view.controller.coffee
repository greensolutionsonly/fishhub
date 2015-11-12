angular.module('fh.bid').controller('BidViewCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  Bid
  $stateParams
  ) ->

    $scope.loading=false
    $scope.bid = Bid.get({ id: $stateParams.id})
    $scope.view = ->
      $location.path("bids/"+$scope.bid._id)
    $scope.add = ->
      $location.path("bids/new")
    $scope.delete = ->
      if confirm("Delete?")
        $scope.fish.$delete ->
          $location.path("bids")
          return
      else
)