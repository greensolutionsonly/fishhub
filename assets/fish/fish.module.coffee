angular.module('fh.fish', [
  'ui.router'
  'fh.fishResource'
])

.config(($stateProvider) ->
  $stateProvider.state('fishes',
    url: '/fishes'
    views:
      main:
        controller: 'FishAddCtrl'
        templateUrl: 'fish/fish-add.tpl.html'
  ).state('fishes/:id',
    url: '/fishes/:id'
    views:
      main:
        controller: 'FishCtrl'
        templateUrl: 'fish/fish-edit.tpl.html'
  )
)