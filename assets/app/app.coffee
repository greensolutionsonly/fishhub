angular.module('fishHubApp',[
  'ui.router'
  'fh.user'
  'fh.login'
  'fh.i18n'
  'ngMaterial'
  'ngCookies'
  'fh.templates'
  'ngMdIcons'
  'fh.home'
  'fh.welcome'
  'fh.fish'
  'fh.userSession'
  'fh.locales'
  'pascalprecht.translate'
])

  .controller('AppCtrl', ($scope, $timeout, $location,
    $mdSidenav, $mdUtil, $log, $translate,
      SessionService, $cookies, $rootScope, User) ->
        $scope.user = SessionService
        $scope.lastLoggedinTime = $cookies.get("LastLoggedinTime")
        buildToggler = (navID) ->
          debounceFn = $mdUtil.debounce((->
            $mdSidenav(navID).toggle().then ->
              $log.debug 'toggle ' + navID + ' is done'
              return
            return
          ), 200)
          debounceFn
        $scope.toggleLeft = buildToggler('left')
        $scope.goToLastVisitedPath = ->
          if angular.isDefined($cookies.get("UserId")) &&
            angular.isDefined($cookies.get("LastVisitedPath"))
              $location.path($cookies.get('LastVisitedPath'))
        $rootScope.$on '$locationChangeStart', (event, next, current) ->
          $cookies.put("LastVisitedPath", next) if $scope.user.IsLogged
          return
        $scope.go = (path) ->
          $location.path(path)
          $scope.close()
        $scope.isAlreadyLoggedin = ->
          angular.isDefined($cookies.get("Id"))
        $scope.showHomePage = ->
          if $scope.isAlreadyLoggedin() == true
            $location.path('fishes')
          else
            $location.path('welcome')
        $scope.viewItems = ->
          $location.path("fishes")
          $scope.close()
        $scope.setSession = (data) ->
          SessionService.IsLogged = true
          SessionService.Role = data.role
          SessionService.Id = data._id
          SessionService.UserId = data.userid
          SessionService.Country = data.country
          SessionService.Email = data.email
          $translate.use(data.locale)
        $scope.init = ->
          if $scope.isAlreadyLoggedin() == true
            User.get { id: $cookies.get("Id")}, (data, responseHeaders) ->
              $scope.setSession(data)
          $scope.showHomePage()

        $scope.init()
        $scope.close = ->
          $mdSidenav('left').close().then ->
            return
          return

          return
  )
