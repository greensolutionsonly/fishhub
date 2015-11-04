angular.module('fh.user').controller('UserEditCtrl', function($rootScope, $scope, $location, User, countries, roles, locales, $mdDialog, $stateParams, $translate) {
  var errorCtrl, successUpdateCtrl;
  $scope.countries = countries;
  $scope.locales = locales;
  $scope.user = User.get({
    id: $stateParams.id
  });
  $scope.roles = roles;
  $scope.loading = false;
  successUpdateCtrl = function($scope, $mdDialog) {
    $scope.update = true;
    $scope.create = false;
    return $scope.hide = function() {
      $mdDialog.hide();
      return $location.path("users/" + $stateParams.id);
    };
  };
  errorCtrl = function($scope, $mdDialog, errors) {
    $scope.errors = errors;
    $scope.update = true;
    $scope.create = false;
    return $scope.hide = function() {
      return $mdDialog.hide();
    };
  };
  $scope.showUpdateSuccess = function() {
    return $mdDialog.show({
      controller: successUpdateCtrl,
      templateUrl: 'user/user-upsert-success.tpl.html',
      parent: angular.element(document.querySelector('#userUpdateContainer')),
      clickOutsideToClose: true
    });
  };
  $scope.toggleLanguage = function() {
    return $translate.use($scope.user.locale);
  };
  $scope.showUpdateErrors = function(errors) {
    return $mdDialog.show({
      controller: errorCtrl,
      templateUrl: 'user/user-upsert-error.tpl.html',
      parent: angular.element(document.querySelector('#userUpdateContainer')),
      locals: {
        errors: $scope.errors
      },
      clickOutsideToClose: true
    });
  };
  return $scope.updateUser = function() {
    $scope.loading = true;
    return $scope.user.$update((function(resp, headers) {
      $scope.loading = false;
      $scope.toggleLanguage();
      return $scope.showUpdateSuccess();
    }), function(err) {
      $scope.errors = err.data;
      $scope.showUpdateErrors();
      return $scope.loading = false;
    });
  };
});
