angular.module('fh.bid').controller('BidAddCtrl', (
  $rootScope
  $scope
  $location
  Bid
  currencies
  SessionService
  $mdDialog
  ) ->

    $scope.loading = false
    $scope.bid = new Bid()
    $scope.currencies = currencies

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
        templateUrl: 'bid/bid-upsert-success.tpl.html'
        parent: angular.element(document.querySelector('#bidContainer'))
        clickOutsideToClose: true)

    $scope.showErrors = (errors) ->
      $mdDialog.show(
        controller: errorCtrl
        templateUrl: 'bid/bid-upsert-error.tpl.html'
        parent: angular.element(document.querySelector('#bidContainer'))
        locals: { errors: $scope.errors}
        clickOutsideToClose: true)

    $scope.addBid = ->
      $scope.loading = true
      $scope.bid.$save ((resp, headers) ->
        $scope.loading=false
        $scope.showSuccess()
      ), (err) ->
        $scope.errors = err.data
        $scope.showErrors()
        $scope.loading=false
)