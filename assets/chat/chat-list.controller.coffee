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
    $scope.userName = SessionService.UserName
    $scope.keyPress = (event) ->
      console.log(event)
    $scope.onUpload = (content) ->
      console.log(content)

    $scope.getChatObject = (type) ->
      chat = {
        message: $scope.message,
        messagetype: type,
        fromuid: SessionService.Id,
        touid: "admin"
      }

    $scope.mimeChat = $scope.getChatObject('mime')

    $scope.getChats = ->
      chat = $scope.getChatObject("mime")
      $http(
        method: 'GET'
        params: {fromuid: chat.fromuid, messagetype: "mime", touid: "admin" },
        url: 'chats').then ((response) ->
          $scope.chats = response.data
          return
      ), (response) ->
        console.log(response)
        return

    $scope.sendText = ->
      chat = $scope.getChatObject("text")
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