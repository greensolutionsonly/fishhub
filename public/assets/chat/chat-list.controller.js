angular.module('fh.chat').controller('ChatCtrl', function($rootScope, $scope, $location, $mdDialog, $stateParams, SessionService, $http, $httpParamSerializer) {
  $scope.loading = false;
  $scope.chats = [];
  $scope.sendText = function() {
    var chat;
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
