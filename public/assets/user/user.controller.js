angular.module('fh.user').controller('UserCtrl', function($rootScope, $scope, $location, User, countries, roles, $mdDialog, $stateParams) {
  var errorCtrl, successUpdateCtrl;
  $scope.countries = countries;
  console.log($stateParams);
  $scope.roles = roles;
  $scope.loading = false;
  successUpdateCtrl = function($scope, $mdDialog) {
    return $scope.hide = function() {
      $mdDialog.hide();
      $location.path("users/" + $stateParams.id);
      return alert($stateParams.id);
    };
  };
  errorCtrl = function($scope, $mdDialog, errors) {
    $scope.errors = errors;
    return $scope.hide = function() {
      return $mdDialog.hide();
    };
  };
  $scope.showUpdateSuccess = function() {
    return $mdDialog.show({
      controller: successUpdateCtrl,
      templateUrl: 'updateSuccess.tmpl.html',
      parent: angular.element(document.querySelector('#userUpdateContainer')),
      clickOutsideToClose: true
    });
  };
  $scope.showUpdateErrors = function(errors) {
    return $mdDialog.show({
      controller: errorCtrl,
      templateUrl: 'updateErrors.tmpl.html',
      parent: angular.element(document.querySelector('#userContainer')),
      locals: {
        errors: $scope.errors
      },
      clickOutsideToClose: true
    });
  };
  $scope.user = User.get({
    id: $stateParams.id
  });
  return $scope.updateUser = function() {
    $scope.loading = true;
    return $scope.user.$update((function(resp, headers) {
      $scope.loading = false;
      return $scope.showUpdateSuccess();
    }), function(err) {
      $scope.errors = err.data;
      $scope.showUpdateErrors();
      return $scope.loading = false;
    });
  };
});
