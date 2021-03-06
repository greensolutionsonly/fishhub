angular.module('fh.user').controller('UserAddCtrl', (
  $rootScope
  $scope
  $location
  User
  countries
  roles
  locales
  $mdDialog
  $translate
  ) ->

    $scope.user = new User()
    $scope.countries = countries
    $scope.roles = roles
    $scope.locales = locales
    $scope.loading=false

    successSignupCtrl = ($scope, $mdDialog) ->
      $scope.update = false
      $scope.create = true
      $scope.hide = ->
        $mdDialog.hide()
        $location.path("login")

    errorCtrl = ($scope, $mdDialog, errors) ->
      $scope.errors = errors
      $scope.create = true
      $scope.update = false
      $scope.hide = ->
        $mdDialog.hide()

    $scope.showSignupSuccess = ->
      $mdDialog.show(
        controller: successSignupCtrl
        templateUrl: 'user/user-upsert-success.tpl.html'
        parent: angular.element(document.querySelector('#userContainer'))
        clickOutsideToClose: true)

    $scope.toggleLanguage = ->
      $translate.use($scope.user.locale)

    $scope.showSignupErrors = (errors) ->
      $mdDialog.show(
        controller: errorCtrl
        templateUrl: 'user/user-upsert-error.tpl.html'
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