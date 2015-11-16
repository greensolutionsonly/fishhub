angular.module('fh.chat', ['ui.router', 'fh.currencies']).config(function($stateProvider) {
  return $stateProvider.state('chatView', {
    url: '/chats',
    views: {
      main: {
        controller: 'ChatCtrl',
        templateUrl: 'chat/chats.tpl.html'
      }
    }
  });
});
