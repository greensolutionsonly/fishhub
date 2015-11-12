angular.module('fh.bid').controller('BidAddCtrl', function($rootScope, $scope, $location, Bid, currencies, SessionService, $mdDialog, $stateParams) {
  var errorCtrl, successCtrl;
  $scope.loading = false;
  $scope.bid = new Bid();
  $scope.currencies = currencies;
  successCtrl = function($scope, $mdDialog) {
    return $scope.hide = function() {
      return $mdDialog.hide();
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
  return $scope.addBid = function() {
    $scope.loading = true;
    $scope.bid.fishid = $stateParams.id;
    return $scope.bid.$save((function(resp, headers) {
      $scope.loading = false;
      return $scope.showSuccess();
    }), function(err) {
      $scope.errors = err.data;
      $scope.showErrors();
      return $scope.loading = false;
    });
  };
});
