angular.module('fh.login', [
  'ui.router'
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