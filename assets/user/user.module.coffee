angular.module('fh.user', [
  'ui.router'
  'fh.userResource'
  'fh.countries'
  'fh.roles'
])

.config(($stateProvider) ->
  $stateProvider.state('users',
    url: '/users'
    views:
      main:
        controller: 'UserAddCtrl'
        templateUrl: 'user/user-add.tpl.html'
  )
)