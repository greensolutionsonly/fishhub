angular.module('fh.userResource', ["ngResource"])
.factory("User", ($resource) ->
  return $resource('users/:id', {})
)