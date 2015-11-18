angular.module('fh.chat').controller('ChatCtrl', function($rootScope, $scope, $location, $mdDialog, $stateParams, SessionService, $http, $httpParamSerializer) {
  $scope.loading = false;
  $scope.chats = [];
  $scope.userName = SessionService.UserName;
  $scope.keyPress = function(event) {
    alert(1);
    return console.log(event);
  };
  $scope.onUpload = function(content) {
    return console.log(content);
  };
  $scope.sendText = function() {
    var chat;
    console.log($scope.userName);
    chat = {
      message: $scope.message,
      messagetype: "text",
      fromuid: SessionService.Id
    };
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
