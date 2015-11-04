angular.module('fh.home').controller('HomeCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  SessionService
  ) ->
    $scope.loading=false
    console.log(SessionService)
)