angular.module('fh.bidResource', ["ngResource"])
.factory("Bid", ($resource) ->
  return $resource('bids/:id', {id: '@_id'}, update: method: 'PUT')
)