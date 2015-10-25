angular.module('fh.fish').controller('FishAddCtrl', (
  $rootScope
  $scope
  $location
  Fish
  countries
  roles
  $mdDialog
  ) ->

    $scope.loading = false
    $scope.fish = new Fish()
    $scope.fish.caught_date = new Date()

    successCtrl = ($scope, $mdDialog) ->
      $scope.hide = ->
        $mdDialog.hide()

    errorCtrl = ($scope, $mdDialog, errors) ->
      $scope.errors = errors
      $scope.hide = ->
        $mdDialog.hide()

    $scope.showSuccess = ->
      $mdDialog.show(
        controller: successCtrl
        templateUrl: 'success.tmpl.html'
        parent: angular.element(document.querySelector('#fishContainer'))
        clickOutsideToClose: true)

    $scope.showErrors = (errors) ->
      $mdDialog.show(
        controller: errorCtrl
        templateUrl: 'errors.tmpl.html'
        parent: angular.element(document.querySelector('#fishContainer'))
        locals: { errors: $scope.errors}
        clickOutsideToClose: true)

    $scope.addFish = ->
      $scope.loading = true
      $scope.fish.$save ((resp, headers) ->
        $scope.loading=false
        $scope.showSuccess()
      ), (err) ->
        $scope.errors = err.data
        $scope.showErrors()
        $scope.loading=false
)