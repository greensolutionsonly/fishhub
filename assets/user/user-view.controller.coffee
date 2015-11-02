angular.module('fh.user').controller('UserViewCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  User
  $stateParams
  ) ->

    $scope.loading=false
    $scope.fish = User.get({ id: $stateParams.id})
)