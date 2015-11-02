angular.module('fh.user').controller('UserListCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  User
  $stateParams
  ) ->

    $scope.loading=false
    $scope.users = User.query()
    $scope.go = (path) ->
      $location.path(path)
)