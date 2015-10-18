angular.module('fishHubApp',[
  'ui.router'
  'fh.user'
  'fh.login'
  'fh.i18n'
  'ngMaterial'
  'fh.templates'
  'ngMdIcons'
  'fh.home'
  'fh.welcome'
  'pascalprecht.translate'
])

  .controller('AppCtrl', ($scope, $timeout, $mdSidenav, $mdUtil,$log) ->
    buildToggler = (navID) ->
      debounceFn = $mdUtil.debounce((->
        $mdSidenav(navID).toggle().then ->
          $log.debug 'toggle ' + navID + ' is done'
          return
        return
      ), 200)
      debounceFn
    $scope.toggleLeft = buildToggler('left')
  )
  .controller('LeftCtrl', ($scope, $timeout, $mdSidenav, $log) ->
    $scope.close = ->
      $mdSidenav('left').close().then ->
        $log.debug 'close LEFT is done'
        return
      return

    return
  )
