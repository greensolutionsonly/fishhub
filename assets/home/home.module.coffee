angular.module('fh.home', [
  'ui.router'
  'fh.userSession'
])

.config(($stateProvider) ->
  $stateProvider.state('home',
    url: '/home'
    views:
      main:
        controller: 'HomeCtrl'
        templateUrl: 'home/home.tpl.html'
  )
)