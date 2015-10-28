angular.module('fh.fish', [
  'ui.router'
  'fh.fishResource'
])

.config(($stateProvider) ->
  $stateProvider.state('newFish',
    url: '/fishes/new'
    views:
      main:
        controller: 'FishAddCtrl'
        templateUrl: 'fish/fish-add.tpl.html'
  ).state('editFish',
    url: '/fishes/:id'
    views:
      main:
        controller: 'FishCtrl'
        templateUrl: 'fish/fish-edit.tpl.html'
  ).state('fishes',
    url: '/fishes'
    views:
      main:
        controller: 'FishCtrl'
        templateUrl: 'fish/fishes.tpl.html'
  )
)