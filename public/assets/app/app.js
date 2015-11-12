angular.module('fishHubApp', ['ui.router', 'fh.user', 'fh.login', 'fh.i18n', 'ngMaterial', 'ngCookies', 'fh.templates', 'ngMdIcons', 'fh.home', 'fh.welcome', 'fh.fish', 'fh.userSession', 'fh.locales', 'pascalprecht.translate']).controller('AppCtrl', function($scope, $timeout, $location, $mdSidenav, $mdUtil, $log, $translate, SessionService, $cookies, $rootScope, User) {
  var buildToggler;
  $scope.user = SessionService;
  $scope.lastLoggedinTime = $cookies.get("LastLoggedinTime");
  buildToggler = function(navID) {
    var debounceFn;
    debounceFn = $mdUtil.debounce((function() {
      $mdSidenav(navID).toggle().then(function() {
        $log.debug('toggle ' + navID + ' is done');
      });
    }), 200);
    return debounceFn;
  };
  $scope.toggleLeft = buildToggler('left');
  $scope.goToLastVisitedPath = function() {
    if (angular.isDefined($cookies.get("UserId")) && angular.isDefined($cookies.get("LastVisitedPath"))) {
      return $location.path($cookies.get('LastVisitedPath'));
    }
  };
  $rootScope.$on('$locationChangeStart', function(event, next, current) {
    if ($scope.user.IsLogged) {
      $cookies.put("LastVisitedPath", next);
    }
  });
  $scope.go = function(path) {
    $location.path(path);
    return $scope.close();
  };
  $scope.isAlreadyLoggedin = function() {
    return angular.isDefined($cookies.get("Id"));
  };
  $scope.showHomePage = function() {
    if ($scope.isAlreadyLoggedin() === true) {
      return $location.path('fishes');
    } else {
      return $location.path('welcome');
    }
  };
  $scope.viewItems = function() {
    $location.path("fishes");
    return $scope.close();
  };
  $scope.setSession = function(data) {
    SessionService.IsLogged = true;
    SessionService.Role = data.role;
    SessionService.Id = data._id;
    SessionService.UserId = data.userid;
    SessionService.Country = data.country;
    SessionService.Email = data.email;
    return $translate.use(data.locale);
  };
  $scope.init = function() {
    if ($scope.isAlreadyLoggedin() === true) {
      User.get({
        id: $cookies.get("Id")
      }, function(data, responseHeaders) {
        return $scope.setSession(data);
      });
    }
    return $scope.showHomePage();
  };
  $scope.init();
  return $scope.close = function() {
    $mdSidenav('left').close().then(function() {});
    return;
  };
});
