angular.module('fh.user').controller('UserCtrl', (
  $rootScope
  $scope
  $location
  User
  countries
  roles
  $mdDialog
  $stateParams
  ) ->

    $scope.countries = countries
    console.log($stateParams)

    $scope.roles = roles
    $scope.loading=false
    successUpdateCtrl = ($scope, $mdDialog) ->
      $scope.hide = ->
        $mdDialog.hide()

    errorCtrl = ($scope, $mdDialog, errors) ->
      $scope.errors = errors
      $scope.hide = ->
        $mdDialog.hide()
       
    $scope.showUpdateSuccess = ->
      $mdDialog.show(
        controller: successUpdateCtrl
        templateUrl: 'updateSuccess.tmpl.html'
        parent: angular.element(document.querySelector('#userContainer'))
        clickOutsideToClose: true)

    $scope.showUpdateErrors = (errors) ->
      $mdDialog.show(
        controller: errorCtrl
        templateUrl: 'updateErrors.tmpl.html'
        parent: angular.element(document.querySelector('#userContainer'))
        locals: { errors: $scope.errors}
        clickOutsideToClose: true)

    $scope.user = User.get({id: $stateParams.id})
    
    $scope.updateUser = ->
      $scope.loading = true
      alert($scope.user.role)
      $scope.user.$save ((resp, headers) ->
        $scope.loading=false
        $scope.showUpdateSuccess()
      ), (err) ->
        $scope.errors = err.data
        $scope.showUpdateErrors()
        $scope.loading=false
)