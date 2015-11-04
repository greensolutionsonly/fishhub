angular.module('fh.login', ['ui.router', 'ngCookies']).config(function($stateProvider) {
  return $stateProvider.state('login', {
    url: '/login',
    views: {
      main: {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    }
  });
});
