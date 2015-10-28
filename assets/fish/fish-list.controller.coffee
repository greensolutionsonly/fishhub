angular.module('fh.fish').controller('FishListCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  Fish
  $stateParams
  ) ->

    $scope.loading=false
    $scope.fishes = Fish.query()
)