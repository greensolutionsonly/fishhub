angular.module('fh.user').controller('UserAddCtrl', (
  $rootScope
  $scope
  $location
  User
  countries
  roles
  $mdDialog
  ) ->

  $scope.user = new User()
  $scope.countries = countries
  $scope.roles = roles
  $scope.loading=false

  successSignupCtrl = ($scope, $mdDialog) ->
    $scope.hide = ->
      $mdDialog.hide()
      $location.path("login")

  errorCtrl = ($scope, $mdDialog, errors) ->
    $scope.errors = errors
    $scope.hide = ->
      $mdDialog.hide()

  $scope.showSignupSuccess = ->
    $mdDialog.show(
      controller: successSignupCtrl
      templateUrl: 'signupSuccess.tmpl.html'
      parent: angular.element(document.querySelector('#userContainer'))
      clickOutsideToClose: true)

  $scope.showSignupErrors = (errors) ->
    $mdDialog.show(
      controller: errorCtrl
      templateUrl: 'signupErrors.tmpl.html'
      parent: angular.element(document.querySelector('#userContainer'))
      locals: { errors: $scope.errors}
      clickOutsideToClose: true)

  $scope.createUser = ->
    $scope.loading = true
    $scope.user.$save ((resp, headers) ->
      $scope.loading=false
      $scope.showSignupSuccess()
    ), (err) ->
      $scope.errors = err.data
      $scope.showSignupErrors()
      $scope.loading=false
)