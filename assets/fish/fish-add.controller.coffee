angular.module('fh.fish').controller('FishAddCtrl', (
  $rootScope
  $scope
  $location
  Fish
  currencies
  SessionService
  $mdDialog
  ) ->

    $scope.loading = false
    $scope.fish = new Fish()
    $scope.currencyType = "\u0192"
    $scope.currencies = currencies
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
        templateUrl: 'fish/fish-upsert-success.tpl.html'
        parent: angular.element(document.querySelector('#fishContainer'))
        clickOutsideToClose: true)

    $scope.showErrors = (errors) ->
      $mdDialog.show(
        controller: errorCtrl
        templateUrl: 'fish/fish-upsert-error.tpl.html'
        parent: angular.element(document.querySelector('#fishContainer'))
        locals: { errors: $scope.errors}
        clickOutsideToClose: true)
    $scope.setCurrency = ->
      $scope.fish.currencytype = SessionService.Country
    $scope.setCurrency()
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