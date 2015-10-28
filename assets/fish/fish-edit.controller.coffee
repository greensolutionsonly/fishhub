angular.module('fh.fish').controller('FishEditCtrl', (
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