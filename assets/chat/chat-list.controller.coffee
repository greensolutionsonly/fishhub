angular.module('fh.chat').controller('ChatCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  $stateParams
  SessionService
  $http
  $httpParamSerializer
  ) ->

    $scope.loading=false
    $scope.chats = []

    $scope.sendText = ->
      chat = {
        message: $scope.message,
        messagetype: "text",
        fromuid: SessionService.Id
      }
      $http
        method: 'POST'
        url: 'chats'
        data: $httpParamSerializer(chat)
        headers: 'Content-Type': 'application/x-www-form-urlencoded'
      $scope.chats.push(chat)
    $scope.onSwipeRight = (path) ->
      $location.path(path)
    $scope.go = (path) ->
      $location.path(path)
)