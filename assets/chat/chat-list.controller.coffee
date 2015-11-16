angular.module('fh.chat').controller('ChatCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  $stateParams
  ) ->

    $scope.loading=false
    $scope.chat = {}
    $scope.onSwipeRight = (path) ->
      $location.path(path)
    $scope.go = (path) ->
      $location.path(path)
)