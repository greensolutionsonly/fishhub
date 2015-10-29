angular.module('fh.fish').controller('FishEditCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  Fish
  $stateParams
  ) ->

    $scope.loading=false
    $scope.fish = Fish.get({ id: $stateParams.id })
    successCtrl = ($scope, $mdDialog) ->
      $scope.hide = ->
        $mdDialog.hide()
        $location.path("fishes")

    errorCtrl = ($scope, $mdDialog, errors) ->
      $scope.errors = errors
      $scope.hide = ->
        $mdDialog.hide()

    $scope.showSuccess = ->
      $mdDialog.show(
        controller: successCtrl
        templateUrl: 'fish/fish-update-success.tpl.html'
        parent: angular.element(document.querySelector('#fishContainer'))
        clickOutsideToClose: true)

    $scope.showErrors = (errors) ->
      $mdDialog.show(
        controller: errorCtrl
        templateUrl: 'fish/fish-update-error.tpl.html'
        parent: angular.element(document.querySelector('#fishContainer'))
        locals: { errors: $scope.errors}
        clickOutsideToClose: true)

    $scope.updateFish = ->
      $scope.loading = true
      $scope.fish.$update ((resp, headers) ->
        $scope.loading=false
        $scope.showSuccess()
      ), (err) ->
        $scope.errors = err.data
        $scope.showErrors()
        $scope.loading=false
)