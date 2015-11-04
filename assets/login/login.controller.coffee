angular.module('fh.login').controller('LoginCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  SessionService
  $http
  ) ->

    $scope.loading=false
    $scope.user = {}
    errorCtrl = ($scope, $mdDialog) ->
      $scope.hide = ->
        $mdDialog.hide()
    console.log(SessionService)
    $scope.showLoginError = (errors) ->
      $mdDialog.show(
        controller: errorCtrl
        templateUrl: 'login/login-error.tpl.html'
        parent: angular.element(document.querySelector('#loginContainer'))
        clickOutsideToClose: true)
    $scope.checkCredential = ->
      $scope.loading = true
      $http.post("login", $scope.user).success((data, status) ->
        $scope.loading = false
        $location.path("home")
        SessionService.IsLogged = true
        SessionService.Role = data.role
        SessionService.Id= data._id
        SessionService.UserId = data.userid
        SessionService.Country = data.country
        SessionService.Email = data.email
      ).error (data, status, headers, config) ->
        console.log(data)
        $scope.showLoginError()
        $scope.loading = false
)