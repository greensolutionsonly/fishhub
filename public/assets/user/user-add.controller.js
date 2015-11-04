angular.module('fh.user').controller('UserAddCtrl', function($rootScope, $scope, $location, User, countries, roles, locales, $mdDialog, $translate) {
  var errorCtrl, successSignupCtrl;
  $scope.user = new User();
  $scope.countries = countries;
  $scope.roles = roles;
  $scope.locales = locales;
  $scope.loading = false;
  successSignupCtrl = function($scope, $mdDialog) {
    $scope.update = false;
    $scope.create = true;
    return $scope.hide = function() {
      $mdDialog.hide();
      return $location.path("login");
    };
  };
  errorCtrl = function($scope, $mdDialog, errors) {
    $scope.errors = errors;
    $scope.create = true;
    $scope.update = false;
    return $scope.hide = function() {
      return $mdDialog.hide();
    };
  };
  $scope.showSignupSuccess = function() {
    return $mdDialog.show({
      controller: successSignupCtrl,
      templateUrl: 'user/user-upsert-success.tpl.html',
      parent: angular.element(document.querySelector('#userContainer')),
      clickOutsideToClose: true
    });
  };
  $scope.toggleLanguage = function() {
    return $translate.use($scope.user.locale);
  };
  $scope.showSignupErrors = function(errors) {
    return $mdDialog.show({
      controller: errorCtrl,
      templateUrl: 'user/user-upsert-error.tpl.html',
      parent: angular.element(document.querySelector('#userContainer')),
      locals: {
        errors: $scope.errors
      },
      clickOutsideToClose: true
    });
  };
  return $scope.createUser = function() {
    $scope.loading = true;
    return $scope.user.$save((function(resp, headers) {
      $scope.loading = false;
      return $scope.showSignupSuccess();
    }), function(err) {
      $scope.errors = err.data;
      $scope.showSignupErrors();
      return $scope.loading = false;
    });
  };
});
