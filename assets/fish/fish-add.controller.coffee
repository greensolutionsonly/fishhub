angular.module('fh.fish').controller('FishAddCtrl', (
  $rootScope
  $scope
  $location
  User
  countries
  roles
  $mdDialog
  ) ->

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

    $scope.addFish = ->
      $scope.loading = true
      $scope.loading=false
)