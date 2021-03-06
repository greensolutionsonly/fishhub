angular.module('fh.user', [
  'ui.router'
  'fh.userResource'
  'fh.countries'
  'fh.roles'
  'fh.locales'
])

.config(($stateProvider) ->
  $stateProvider.state('newUser',
    url: '/users/new'
    views:
      main:
        controller: 'UserAddCtrl'
        templateUrl: 'user/user-add.tpl.html'
  ).state('editUser',
    url: '/users/:id'
    views:
      main:
        controller: 'UserEditCtrl'
        templateUrl: 'user/user-edit.tpl.html'
  ).state('users',
    url: '/users'
    views:
      main:
        controller: 'UserListCtrl'
        templateUrl: 'user/users.tpl.html'
  ).state('viewuser',
    url: '/users/:id/view'
    views:
      main:
        controller: 'UserViewCtrl'
        templateUrl: 'user/user-view.tpl.html'
  )
)