angular.module('fh.login').controller('LoginCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  $http
  ) ->

  $scope.loading=false
  $scope.user = {}
  $scope.checkCredential = ->
    $http.post("login", $scope.user).success((data, status) ->
      console.log("login is successful")
    ).error (data, status, headers, config) ->
      console.log(data)
)