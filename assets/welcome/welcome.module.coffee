angular.module('fh.welcome', [
  'ui.router'
])

.config(($stateProvider) ->
  $stateProvider.state('welcome',
    url: '/welcome'
    views:
      main:
        controller: 'WelcomeCtrl'
        templateUrl: 'welcome/welcome.tpl.html'
  )
)