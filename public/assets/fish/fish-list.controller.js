angular.module('fh.fish').controller('FishListCtrl', function($rootScope, $scope, $location, $mdDialog, Fish, $stateParams) {
  $scope.loading = false;
  $scope.fishes = Fish.query();
  $scope.sortByPriceField = "+pricing";
  $scope.sortByCaughtDateField = "-caughtdate";
  $scope.sortByQuantityField = "+quantity";
  $scope.sortByQuantityClass = "";
  $scope.sortByCaughtDateClass = "";
  $scope.sortByPriceClass = "";
  $scope.sortField = "";
  $scope.changeSortOrder = function(sortkey) {
    var sort;
    sort = sortkey.toString();
    if (sort.indexOf('+') === 0) {
      sort = "-" + sort.substring(1);
    } else {
      sort = "+" + sort.substring(1);
    }
    $scope.sortField = sort;
    console.log($scope.sortField);
    return sort;
  };
  $scope.sortByCaughtDate = function() {
    $scope.sortByCaughtDateField = $scope.changeSortOrder($scope.sortByCaughtDateField);
    $scope.sortByPriceClass = "";
    $scope.sortByQuantityClass = "";
    return $scope.sortByCaughtDateClass = $scope.sortByCaughtDateField;
  };
  $scope.sortByQuantity = function() {
    $scope.sortByQuantityField = $scope.changeSortOrder($scope.sortByQuantityField);
    $scope.sortByPriceClass = "";
    $scope.sortByQuantityClass = $scope.sortByQuantityField;
    return $scope.sortByCaughtDateClass = "";
  };
  $scope.sortByPrice = function() {
    $scope.sortByPriceField = $scope.changeSortOrder($scope.sortByPriceField);
    $scope.sortByPriceClass = $scope.sortByPriceField;
    $scope.sortByQuantityClass = "";
    return $scope.sortByCaughtDateClass = "";
  };
  $scope.onSwipeRight = function(path) {
    return $location.path(path);
  };
  $scope.go = function(path) {
    return $location.path(path);
  };
  return $scope.openMenu = function($mdOpenMenu, ev) {
    var originatorEv;
    originatorEv = ev;
    return $mdOpenMenu(ev);
  };
});
