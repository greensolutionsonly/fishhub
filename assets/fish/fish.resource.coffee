angular.module('fh.fishResource', ["ngResource"])
.factory("Fish", ($resource) ->
  return $resource('fishes/:id', {id: '@_id'}, update: method: 'PUT')
)