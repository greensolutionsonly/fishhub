angular.module('fh.chat').controller('ChatCtrl', function($rootScope, $scope, $location, $mdDialog, $stateParams, SessionService, $http, $httpParamSerializer) {
  $scope.loading = false;
  $scope.chats = [];
  $scope.userName = SessionService.UserName;
  $scope.keyPress = function(event) {
    return console.log(event);
  };
  $scope.onUpload = function(content) {
    return console.log(content);
  };
  $scope.getChatObject = function(type) {
    var chat;
    return chat = {
      message: $scope.message,
      messagetype: type,
      fromuid: SessionService.Id,
      touid: "admin"
    };
  };
  $scope.mimeChat = $scope.getChatObject('mime');
  $scope.getChats = function() {
    var chat;
    chat = $scope.getChatObject("mime");
    return $http({
      method: 'GET',
      params: {
        fromuid: chat.fromuid,
        messagetype: "mime",
        touid: "admin"
      },
      url: 'chats'
    }).then((function(response) {
      $scope.chats = response.data;
    }), function(response) {
      console.log(response);
    });
  };
  $scope.sendText = function() {
    var chat;
    chat = $scope.getChatObject("text");
    $http({
      method: 'POST',
      url: 'chats',
      data: $httpParamSerializer(chat),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return $scope.chats.push(chat);
  };
  $scope.onSwipeRight = function(path) {
    return $location.path(path);
  };
  return $scope.go = function(path) {
    return $location.path(path);
  };
});
