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
  'fh.fish'
  'fh.userSession'
  'pascalprecht.translate'
])

  .controller('AppCtrl', ($scope,$timeout,$location,$mdSidenav,$mdUtil,$log) ->
    #$location.path("welcome")
    buildToggler = (navID) ->
      debounceFn = $mdUtil.debounce((->
        $mdSidenav(navID).toggle().then ->
          $log.debug 'toggle ' + navID + ' is done'
          return
        return
      ), 200)
      debounceFn
    $scope.toggleLeft = buildToggler('left')

    $scope.go = (path) ->
      $location.path(path)

    $scope.viewItems = ->
      $location.path("fishes")
      $scope.close()

    $scope.close = ->
      $mdSidenav('left').close().then ->
        return
      return

      return
  )
