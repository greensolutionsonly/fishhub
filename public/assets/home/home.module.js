angular.module('fh.home', ['ui.router', 'fh.userSession']).config(function($stateProvider) {
  return $stateProvider.state('home', {
    url: '/home',
    views: {
      main: {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    }
  });
});
