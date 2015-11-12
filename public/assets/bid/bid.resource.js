angular.module('fh.bidResource', ["ngResource"]).factory("Bid", function($resource) {
  return $resource('bids/:id', {
    id: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  });
});
