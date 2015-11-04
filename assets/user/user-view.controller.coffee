angular.module('fh.user').controller('UserViewCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  User
  $stateParams
  countries
  roles
  ) ->

    $scope.loading=false
    $scope.countries = countries
    $scope.roles = roles
    $scope.user = User.get({ id: $stateParams.id})
    $scope.edit = ->
      $location.path("users/"+$scope.user._id)
)