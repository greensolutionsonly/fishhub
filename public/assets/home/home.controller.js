angular.module('fh.home').controller('HomeCtrl', function($rootScope, $scope, $location, $mdDialog, SessionService) {
  $scope.loading = false;
  return console.log(SessionService);
});
