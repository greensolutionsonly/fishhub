angular.module('fh.login').controller('LoginCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  $http
  ) ->

    $scope.loading=false
    $scope.user = {}
    errorCtrl = ($scope, $mdDialog) ->
      $scope.hide = ->
        $mdDialog.hide()
    $scope.showLoginError = (errors) ->
      $mdDialog.show(
        controller: errorCtrl
        templateUrl: 'loginError.tmpl.html'
        parent: angular.element(document.querySelector('#loginContainer'))
        clickOutsideToClose: true)
    $scope.checkCredential = ->
      $scope.loading = true
      $http.post("login", $scope.user).success((data, status) ->
        $scope.loading = false
        $location.path("home")
        console.log($location.path())
      ).error (data, status, headers, config) ->
        console.log(data)
        $scope.showLoginError()
        $scope.loading = false
)