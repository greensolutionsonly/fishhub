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
    $scope.sortArray = {
      "sortPrice": "asc",
      "sortCreated": "desc",
      "sortQuantity": "asc"
    }
    $scope.sortItems = (key) ->
      $scope.setSortArray(key)
      Fish.query($scope.sortArray)
    $scope.setSortArray = (key)->
      $scope.sortArray[key] =
        if $scope.sortArray[key] == "asc" then 'desc' else 'asc'
    $scope.sort = (sortyby, sortorder) ->
      $scope.fishes = Fish.query(  )
    $scope.onSwipeRight = (path) ->
      $location.path(path)
    $scope.go = (path) ->
      $location.path(path)
    $scope.openMenu = ($mdOpenMenu, ev) ->
      originatorEv = ev
      $mdOpenMenu(ev)
)