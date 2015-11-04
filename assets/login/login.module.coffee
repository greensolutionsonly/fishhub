angular.module('fh.login', [
  'ui.router'
  'ngCookies'
])

.config(($stateProvider) ->
  $stateProvider.state('login',
    url: '/login'
    views:
      main:
        controller: 'LoginCtrl'
        templateUrl: 'login/login.tpl.html'
  )
)