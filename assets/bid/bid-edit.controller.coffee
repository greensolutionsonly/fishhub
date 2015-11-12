angular.module('fh.fish').controller('BidEditCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  Bid
  currencies
  $stateParams
  ) ->

    $scope.loading=false
    $scope.currencies = currencies
    $scope.bid = Bid.get({ id: $stateParams.id })
    successCtrl = ($scope, $mdDialog) ->
      $scope.hide = ->
        $mdDialog.hide()
        $location.path("bids")

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

    $scope.updateBid = (active) ->
      $scope.loading = true
      $scope.bid.$update ((resp, headers) ->
        $scope.loading=false
        $scope.showSuccess()
      ), (err) ->
        $scope.errors = err.data
        $scope.showErrors()
        $scope.loading=false
)