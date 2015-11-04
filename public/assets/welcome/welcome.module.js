angular.module('fh.welcome', ['ui.router']).config(function($stateProvider) {
  return $stateProvider.state('welcome', {
    url: '/welcome',
    views: {
      main: {
        controller: 'WelcomeCtrl',
        templateUrl: 'welcome/welcome.tpl.html'
      }
    }
  });
});
