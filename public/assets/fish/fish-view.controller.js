angular.module('fh.fish').controller('FishViewCtrl', function($rootScope, $scope, $location, $mdDialog, Fish, SessionService, $stateParams) {
  $scope.loading = false;
  $scope.isAdmin = SessionService.IsAdmin;
  $scope.fish = Fish.get({
    id: $stateParams.id
  });
  $scope.view = function() {
    return $location.path("fishes/" + $scope.fish._id);
  };
  $scope.add = function() {
    return $location.path("fishes/new");
  };
  $scope.bid = function(id) {
    return $location.path("bids/" + id + "/new");
  };
  return $scope["delete"] = function() {
    if (confirm("Delete?")) {
      return $scope.fish.$delete(function() {
        $location.path("fishes");
      });
    } else {

    }
  };
});
