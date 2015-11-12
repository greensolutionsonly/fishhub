angular.module('fh.fish').controller('FishAddCtrl', function($rootScope, $scope, $location, Fish, currencies, SessionService, $mdDialog) {
  var errorCtrl, successCtrl;
  $scope.loading = false;
  $scope.fish = new Fish();
  $scope.currencyType = "\u0192";
  $scope.currencies = currencies;
  $scope.fish.caught_date = new Date();
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
      templateUrl: 'fish/fish-upsert-success.tpl.html',
      parent: angular.element(document.querySelector('#fishContainer')),
      clickOutsideToClose: true
    });
  };
  $scope.showErrors = function(errors) {
    return $mdDialog.show({
      controller: errorCtrl,
      templateUrl: 'fish/fish-upsert-error.tpl.html',
      parent: angular.element(document.querySelector('#fishContainer')),
      locals: {
        errors: $scope.errors
      },
      clickOutsideToClose: true
    });
  };
  $scope.setCurrency = function() {
    return $scope.fish.currencytype = SessionService.Country;
  };
  $scope.setCurrency();
  return $scope.addFish = function() {
    $scope.loading = true;
    return $scope.fish.$save((function(resp, headers) {
      $scope.loading = false;
      return $scope.showSuccess();
    }), function(err) {
      $scope.errors = err.data;
      $scope.showErrors();
      return $scope.loading = false;
    });
  };
});
