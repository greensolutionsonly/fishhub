angular.module('fh.fish').controller('BidEditCtrl', function($rootScope, $scope, $location, $mdDialog, Bid, currencies, $stateParams) {
  var errorCtrl, successCtrl;
  $scope.loading = false;
  $scope.currencies = currencies;
  $scope.bid = Bid.get({
    id: $stateParams.id
  });
  successCtrl = function($scope, $mdDialog) {
    return $scope.hide = function() {
      $mdDialog.hide();
      return $location.path("bids");
    };
  };
  errorCtrl = function($scope, $mdDialog, errors) {
    $scope.errors = errors;
    return $scope.hide = function() {
      return $mdDialog.hide();
    };
  };
  $scope.showSuccess = function() {
    return $mdDialog.show({
      controller: successCtrl,
      templateUrl: 'bid/bid-upsert-success.tpl.html',
      parent: angular.element(document.querySelector('#bidContainer')),
      clickOutsideToClose: true
    });
  };
  $scope.showErrors = function(errors) {
    return $mdDialog.show({
      controller: errorCtrl,
      templateUrl: 'bid/bid-upsert-error.tpl.html',
      parent: angular.element(document.querySelector('#bidContainer')),
      locals: {
        errors: $scope.errors
      },
      clickOutsideToClose: true
    });
  };
  return $scope.updateBid = function(active) {
    $scope.loading = true;
    return $scope.bid.$update((function(resp, headers) {
      $scope.loading = false;
      return $scope.showSuccess();
    }), function(err) {
      $scope.errors = err.data;
      $scope.showErrors();
      return $scope.loading = false;
    });
  };
});
