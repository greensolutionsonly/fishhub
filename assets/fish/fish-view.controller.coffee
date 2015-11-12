angular.module('fh.fish').controller('FishViewCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  Fish
  SessionService
  $stateParams
  ) ->

    $scope.loading=false
    $scope.isAdmin = SessionService.IsAdmin
    $scope.fish = Fish.get({ id: $stateParams.id})
    $scope.view = ->
      $location.path("fishes/"+$scope.fish._id)
    $scope.add = ->
      $location.path("fishes/new")
    $scope.bid = (id) ->
      $location.path("bids/"+ id + "/new")
    $scope.delete = ->
      if confirm("Delete?")
        $scope.fish.$delete ->
          $location.path("fishes")
          return
      else
)