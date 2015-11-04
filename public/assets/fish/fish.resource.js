angular.module('fh.fishResource', ["ngResource"]).factory("Fish", function($resource) {
  return $resource('fishes/:id', {
    id: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  });
});
