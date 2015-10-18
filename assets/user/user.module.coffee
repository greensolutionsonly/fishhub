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
  ).state('users/:id',
    url: '/users/:id'
    views:
      main:
        controller: 'UserCtrl'
        templateUrl: 'user/user-edit.tpl.html'
  )
)