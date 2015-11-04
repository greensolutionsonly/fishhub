angular.module('fh.user').controller('UserEditCtrl', (
  $rootScope
  $scope
  $location
  User
  countries
  roles
  locales
  $mdDialog
  $stateParams
  $translate
  ) ->

    $scope.countries = countries
    $scope.locales = locales
    $scope.user = User.get({ id: $stateParams.id })
    $scope.roles = roles
    $scope.loading=false
    successUpdateCtrl = ($scope, $mdDialog) ->
      $scope.update = true
      $scope.create = false
      $scope.hide = ->
        $mdDialog.hide()
        $location.path("users/"+$stateParams.id)

    errorCtrl = ($scope, $mdDialog, errors) ->
      $scope.errors = errors
      $scope.update = true
      $scope.create = false
      $scope.hide = ->
        $mdDialog.hide()

    $scope.showUpdateSuccess = ->
      $mdDialog.show(
        controller: successUpdateCtrl
        templateUrl: 'user/user-upsert-success.tpl.html'
        parent: angular.element(document.querySelector('#userUpdateContainer'))
        clickOutsideToClose: true)
    $scope.toggleLanguage = ->
      $translate.use($scope.user.locale)
    $scope.showUpdateErrors = (errors) ->
      $mdDialog.show(
        controller: errorCtrl
        templateUrl: 'user/user-upsert-error.tpl.html'
        parent: angular.element(document.querySelector('#userUpdateContainer'))
        locals: { errors: $scope.errors}
        clickOutsideToClose: true)

    $scope.updateUser = ->
      $scope.loading = true
      $scope.user.$update ((resp, headers) ->
        $scope.loading=false
        $scope.toggleLanguage()
        $scope.showUpdateSuccess()
      ), (err) ->
        $scope.errors = err.data
        $scope.showUpdateErrors()
        $scope.loading=false
)