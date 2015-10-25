angular.module('fh.fish').controller('FishCtrl', (
  $rootScope
  $scope
  $location
  $mdDialog
  $stateParams
  ) ->

    $scope.loading=false
    successUpdateCtrl = ($scope, $mdDialog) ->
      $scope.hide = ->
        $mdDialog.hide()
        $location.path("users/"+$stateParams.id)
        alert($stateParams.id)

    errorCtrl = ($scope, $mdDialog, errors) ->
      $scope.errors = errors
      $scope.hide = ->
        $mdDialog.hide()
       
    $scope.showUpdateSuccess = ->
      $mdDialog.show(
        controller: successUpdateCtrl
        templateUrl: 'updateSuccess.tmpl.html'
        parent: angular.element(document.querySelector('#userUpdateContainer'))
        clickOutsideToClose: true)

    $scope.showUpdateErrors = (errors) ->
      $mdDialog.show(
        controller: errorCtrl
        templateUrl: 'updateErrors.tmpl.html'
        parent: angular.element(document.querySelector('#userContainer'))
        locals: { errors: $scope.errors}
        clickOutsideToClose: true)

    $scope.fish = Fish.get({id: $stateParams.id})
    
    $scope.updateUser = ->
      $scope.loading = true
)