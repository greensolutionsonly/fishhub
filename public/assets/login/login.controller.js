angular.module('fh.login').controller('LoginCtrl', function($rootScope, $scope, $location, $mdDialog, SessionService, $http, $cookies, $translate) {
  var errorCtrl;
  $scope.loading = false;
  $scope.user = {};
  errorCtrl = function($scope, $mdDialog) {
    return $scope.hide = function() {
      return $mdDialog.hide();
    };
  };
  console.log(SessionService);
  $scope.showLoginError = function(errors) {
    return $mdDialog.show({
      controller: errorCtrl,
      templateUrl: 'login/login-error.tpl.html',
      parent: angular.element(document.querySelector('#loginContainer')),
      clickOutsideToClose: true
    });
  };
  return $scope.checkCredential = function() {
    $scope.loading = true;
    return $http.post("login", $scope.user).success(function(data, status) {
      $scope.loading = false;
      $location.path("home");
      SessionService.IsLogged = true;
      SessionService.Role = data.role;
      SessionService.Id = data._id;
      SessionService.UserId = data.userid;
      SessionService.Country = data.country;
      SessionService.Email = data.email;
      SessionService.IsAdmin = data.isadmin;
      $cookies.put("LastLoggedinTime", Math.floor(Date.now() / 1000));
      $cookies.put("UserId", data.userid);
      $cookies.put("Id", data._id);
      return $translate.use(data.locale);
    }).error(function(data, status, headers, config) {
      console.log(data);
      $scope.showLoginError();
      return $scope.loading = false;
    });
  };
});
