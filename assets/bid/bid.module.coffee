angular.module('fh.bid', [
  'ui.router'
  'fh.bidResource'
  'fh.currencies'
])

.config(($stateProvider) ->
  $stateProvider.state('newBid',
    url: '/bids/new'
    views:
      main:
        controller: 'BidAddCtrl'
        templateUrl: 'bid/bid-add.tpl.html'
  ).state('editBid',
    url: '/bids/:id'
    views:
      main:
        controller: 'BidEditCtrl'
        templateUrl: 'bid/bid-edit.tpl.html'
  ).state('bids',
    url: '/bids'
    views:
      main:
        controller: 'BidListCtrl'
        templateUrl: 'bid/bids.tpl.html'
  ).state('viewBid',
    url: '/bids/:id/view'
    views:
      main:
        controller: 'BidViewCtrl'
        templateUrl: 'bid/bid-view.tpl.html'
  )
)