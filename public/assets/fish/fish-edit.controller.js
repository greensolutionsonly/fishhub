angular.module('fh.fish').controller('FishEditCtrl', function($rootScope, $scope, $location, $mdDialog, Fish, currencies, $stateParams) {
  var errorCtrl, successCtrl;
  $scope.loading = false;
  $scope.currencies = currencies;
  $scope.fish = Fish.get({
    id: $stateParams.id
  });
  successCtrl = function($scope, $mdDialog) {
    return $scope.hide = function() {
      $mdDialog.hide();
      return $location.path("fishes");
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
  return $scope.updateFish = function() {
    $scope.loading = true;
    return $scope.fish.$update((function(resp, headers) {
      $scope.loading = false;
      return $scope.showSuccess();
    }), function(err) {
      $scope.errors = err.data;
      $scope.showErrors();
      return $scope.loading = false;
    });
  };
});
