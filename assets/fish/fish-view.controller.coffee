angular.module('fh.fish').controller('FishViewCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  Fish
  $stateParams
  ) ->

    $scope.loading=false
    $scope.fish = Fish.get({ id: $stateParams.id})
    $scope.view = ->
      $location.path("fishes/"+$scope.fish._id)
    $scope.add = ->
      $location.path("fishes/new")
    $scope.delete = ->
      if confirm("Delete?")
        $scope.fish.$delete ->
          $location.path("fishes")
          return
      else
)