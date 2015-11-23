angular.module('fh.fish').controller('FishListCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  Fish
  $stateParams
  ) ->

    $scope.loading=false
    $scope.fishes = Fish.query()
    $scope.sortByPriceField = "+pricing"
    $scope.sortByCaughtDateField = "-caughtdate"
    $scope.sortByQuantityField = "+quantity"

    $scope.sortByQuantityClass = ""
    $scope.sortByCaughtDateClass = ""
    $scope.sortByPriceClass = ""
    
    $scope.sortField = ""
    $scope.changeSortOrder = (sortkey) ->
      sort = sortkey.toString()
      if sort.indexOf('+') == 0
        sort = "-" + sort.substring(1)
      else
        sort = "+" + sort.substring(1)
      $scope.sortField = sort
      console.log($scope.sortField)
      return sort

    $scope.sortByCaughtDate = ->
      $scope.sortByCaughtDateField =
        $scope.changeSortOrder($scope.sortByCaughtDateField)
      $scope.sortByPriceClass = ""
      $scope.sortByQuantityClass = ""
      $scope.sortByCaughtDateClass = $scope.sortByCaughtDateField
    $scope.sortByQuantity = ->
      $scope.sortByQuantityField =
        $scope.changeSortOrder($scope.sortByQuantityField)

      $scope.sortByPriceClass = ""
      $scope.sortByQuantityClass = $scope.sortByQuantityField
      $scope.sortByCaughtDateClass = ""
    $scope.sortByPrice = ->
      $scope.sortByPriceField =
        $scope.changeSortOrder($scope.sortByPriceField)

      $scope.sortByPriceClass = $scope.sortByPriceField
      $scope.sortByQuantityClass = ""
      $scope.sortByCaughtDateClass = ""
    $scope.onSwipeRight = (path) ->
      $location.path(path)
    $scope.go = (path) ->
      $location.path(path)
    $scope.openMenu = ($mdOpenMenu, ev) ->
      originatorEv = ev
      $mdOpenMenu(ev)
)