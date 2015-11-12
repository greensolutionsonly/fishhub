(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('bid/bid-add.tpl.html',
    '<div  layout="column"  id="bidContainer"  ng-cloak>\n' +
    '  <br/>\n' +
    '  <div style="padding:8px;">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Bid Prize\' | translate">Bid Price</label>\n' +
    '      <ng-md-icon icon="input" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="bid.price" type="number" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Message\' | translate">Message</label>\n' +
    '      <ng-md-icon icon="subtitles" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="bid.message" type="text">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Currency Type\' | translate">Currency Type</label>\n' +
    '      <md-select ng-model="bid.currencytype">\n' +
    '        <md-option ng-repeat="currency in currencies" value="{{currency.country}}">{{currency.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '  </div>\n' +
    '\n' +
    '  <md-button md-no-ink="" ng-bind="\'Submit\' | translate" class="md-raised md-primary md-button md-default-theme" ng-click="addBid()">\n' +
    '      Submit\n' +
    '  </md-button>\n' +
    '\n' +
    '  <md-button md-no-ink="" ng-bind="\'Save as Draft\' | translate" class="md-raised md-primary md-button md-default-theme" ng-click="saveAsDraft()">\n' +
    '      Save as Draft\n' +
    '  </md-button>\n' +
    '\n' +
    '  <div class="container" ng-show="loading" style="margin-top: 5px;margin-bottom:20px;padding: 5px;">\n' +
    '    <md-progress-linear></md-progress-linear>\n' +
    '    <div class="bottom-block">\n' +
    '      <span g-bind="\'Please wait while we update your data\' | translate">Please wait while we update your data</span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('bid/bid-edit.tpl.html',
    '<div  layout="column"  id="bidContainer"  ng-cloak>\n' +
    '  <br/>\n' +
    '  <div style="padding:8px;">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Bid Prize\' | translate">Bid Price</label>\n' +
    '      <ng-md-icon icon="input" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="bid.price" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Message\' | translate">Message</label>\n' +
    '      <ng-md-icon icon="subtitles" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="bid.message" type="text">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Currency Type\' | translate">Currency Type</label>\n' +
    '      <md-select ng-model="bid.currencytype">\n' +
    '        <md-option ng-repeat="currency in currencies" value="{{currency.country}}">{{currency.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '  </div>\n' +
    '\n' +
    '  <md-button md-no-ink="" ng-bind="\'Submit\' | translate" class="md-raised md-primary md-button md-default-theme" ng-click="addBid()">\n' +
    '      Submit\n' +
    '  </md-button>\n' +
    '\n' +
    '  <md-button md-no-ink="" ng-bind="\'Save as Draft\' | translate" class="md-raised md-primary md-button md-default-theme" ng-click="saveAsDraft()">\n' +
    '      Save as Draft\n' +
    '  </md-button>\n' +
    '\n' +
    '  <div class="container" ng-show="loading" style="margin-top: 5px;margin-bottom:20px;padding: 5px;">\n' +
    '    <md-progress-linear></md-progress-linear>\n' +
    '    <div class="bottom-block">\n' +
    '      <span g-bind="\'Please wait while we update your data\' | translate">Please wait while we update your data</span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('bid/bid-upsert-error.tpl.html',
    '<md-dialog aria-label="Errors">\n' +
    '  <md-toolbar class="md-warn">\n' +
    '    <div class="md-toolbar-tools">\n' +
    '      <h2 ng-bind="\'Errors\' | translate"></h2>\n' +
    '      <span flex></span>\n' +
    '      <md-button class="md-icon-button" ng-click="hide()">\n' +
    '        <ng-md-icon icon="close" size="30" style="fill:white" aria-label="Close dialog"></ng-md-icon>\n' +
    '      </md-button>\n' +
    '    </div>\n' +
    '  </md-toolbar>\n' +
    '  <md-dialog-content style="max-width:800px;max-height:810px;">\n' +
    '    <div ng-repeat="error in errors">\n' +
    '      <div style="margin-top: 10px; text-align: center; padding: 10px;">\n' +
    '        <label ng-bind="\'{{ error.fieldNames[0] + error.message }}\' | translate"></label>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </md-dialog-content>\n' +
    '</md-dialog>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('bid/bid-upsert-success.tpl.html',
    '<md-dialog aria-label="Successful">\n' +
    '  <md-toolbar>\n' +
    '    <div class="md-toolbar-tools">\n' +
    '      <h2 ng-bind="\'Successful Update\' | translate"></h2>\n' +
    '      <span flex></span>\n' +
    '      <md-button class="md-icon-button" ng-click="hide()">\n' +
    '        <ng-md-icon icon="close" size="30" style="fill:white" aria-label="Close dialog"></ng-md-icon>\n' +
    '      </md-button>\n' +
    '    </div>\n' +
    '  </md-toolbar>\n' +
    '  <md-dialog-content style="max-width:800px;max-height:810px;">\n' +
    '    <div style="margin-top: 10px; text-align: center; padding: 10px;">\n' +
    '      <div ng-bind="\'Bid item is updated.\' | translate">Bid item is updated.</div>\n' +
    '    </div>\n' +
    '  </md-dialog-content>\n' +
    '</md-dialog>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('bid/bid-view.tpl.html',
    '<div  layout="column"  id="fishContainer"  ng-cloak>\n' +
    '  <br/>\n' +
    '   <div style="padding:8px;">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Bid Prize\' | translate">Bid Price</label>\n' +
    '      <ng-md-icon icon="input" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="bid.price" type="text" readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Message\' | translate">Message</label>\n' +
    '      <ng-md-icon icon="subtitles" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="bid.message" type="text"  readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Currency Type\' | translate">Currency Type</label>\n' +
    '      <md-select  readonly="readonly" ng-model="bid.currencytype">\n' +
    '        <md-option ng-repeat="currency in currencies" value="{{currency.country}}">{{currency.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<md-content style="text-align: center">\n' +
    '  <div layout="row" style="height:30px;margin-bottom: 30px">\n' +
    '    <div flex>\n' +
    '       <ng-md-icon icon="remove-circle" ng-click="delete()" size="30" style="fill:red" aria-label="Add"></ng-md-icon>\n' +
    '    </div>\n' +
    '    <div flex>\n' +
    '        <ng-md-icon icon="add_circle" size="30" ng-click="add()" style="fill:gray" aria-label="Off"></ng-md-icon>\n' +
    '    </div>\n' +
    '    <div flex>\n' +
    '       <ng-md-icon icon="border_color" size="30" ng-click="view()" style="fill:orange" aria-label="Cake"></ng-md-icon>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('bid/bids.tpl.html',
    '<md-content layout-padding="" class="autoScroll">\n' +
    '  <div style="margin-top:2px;text-align: center">\n' +
    '    <ng-md-icon icon="my_library_add" ng-click="go(\'bids/new\')" size="40" style="fill:#5B5BC5"></ng-md-icon>\n' +
    '  </div>\n' +
    '\n' +
    '  <div style="margin-top:5px;margin-bottom:5px">\n' +
    '    <label ng-bind="\'Total Items\' | translate">Total Items : {{ bids.length }}</label>\n' +
    '  </div>\n' +
    '\n' +
    '  <md-input-container class="md-icon-float">\n' +
    '    <label ng-bind="\'Search\' | translate">Search</label>\n' +
    '    <ng-md-icon icon="search" size="24" style="fill:green"></ng-md-icon>\n' +
    '    <input type="text"  ng-model="searchText.$">\n' +
    '  </md-input-container>\n' +
    '  <md-list>\n' +
    '    <md-list-item class="md-3-line" ng-repeat="bid in bids | filter:searchText">\n' +
    '      <ng-md-icon ng-click="go(\'bids/\'+bid._id+\'/view\')" icon="info" size="30" style="fill:green"></ng-md-icon>\n' +
    '      <div md-swipe-right="onSwipeRight(\'bids/\'+bid._id+\'/view\')" class="md-list-item-text" layout="column">\n' +
    '        <h3>{{bid.price }}</h3>\n' +
    '        <h4>{{ bid.currencytype  }}</h4>\n' +
    '        <p> {{ bid.message }} </p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    ' </md-list>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home/home.tpl.html',
    '<div  layout="column" class="inputdemoIcons" id="homeContainer">\n' +
    '  <md-content layout-padding="">\n' +
    '        <md-list>\n' +
    '  <md-list-item class="md-2-line">\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3><a href="#/fishes/new">Add fish</a></h3>\n' +
    '      <p>You can add fishes to your gallery</p>\n' +
    '    </div>\n' +
    '  </md-list-item>\n' +
    '    <md-list-item class="md-2-line">\n' +
    '    <div class="md-list-item-text">\n' +
    '      <h3><a href="#/fishes">View fish history</a> </h3>\n' +
    '      <p>You can add edit and delete the fishes that you hvae added.</p>\n' +
    '    </div>\n' +
    '  </md-list-item>\n' +
    '</md-list>\n' +
    '  </md-content>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('fish/fish-add.tpl.html',
    '<div  layout="column"  id="fishContainer"  ng-cloak>\n' +
    '  <br/>\n' +
    '  <div style="padding:8px;">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Name\' | translate">Name</label>\n' +
    '      <ng-md-icon icon="input" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.name" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Species\' | translate">Species</label>\n' +
    '      <ng-md-icon icon="subtitles" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.species" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Grade\' | translate">Grade</label>\n' +
    '      <ng-md-icon icon="grade" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.grade" type="text" ng-required="true">\n' +
    '      </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Size\' | translate">Size</label>\n' +
    '      <ng-md-icon icon="add_circle" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.size" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '    <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Quantity\' | translate">Quantity</label>\n' +
    '      <ng-md-icon icon="unfold_more" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input  type="number" ng-model="fish.quantity" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Location\' | translate">Location</label>\n' +
    '      <ng-md-icon icon="my_location" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.location" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Pricing\' | translate">Pricing</label>\n' +
    '      <ng-md-icon icon="attach_money" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input type="number"  ng-model="fish.pricing" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Currency Type\' | translate">Currency Type</label>\n' +
    '      <md-select ng-model="fish.currencytype">\n' +
    '        <md-option ng-repeat="currency in currencies" value="{{currency.country}}">{{currency.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '  </div>\n' +
    '  <div>\n' +
    '    <md-datepicker ng-model="fish.caughtdate" md-placeholder="{{ \'Enter Caught Date\' | translate }}">\n' +
    '    </md-datepicker>\n' +
    '  </div>\n' +
    '\n' +
    '  <md-button md-no-ink="" ng-bind="\'Submit\' | translate" class="md-raised md-primary md-button md-default-theme" ng-click="addFish()">\n' +
    '      Submit\n' +
    '  </md-button>\n' +
    '\n' +
    '  <div class="container" ng-show="loading" style="margin-top: 5px;margin-bottom:20px;padding: 5px;">\n' +
    '    <md-progress-linear></md-progress-linear>\n' +
    '    <div class="bottom-block">\n' +
    '      <span g-bind="\'Please wait while we update your data\' | translate">Please wait while we update your data</span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('fish/fish-edit.tpl.html',
    '<div  layout="column"  id="fishContainer"  ng-cloak>\n' +
    '  <br/>\n' +
    '  <div style="padding:8px;">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Name\' | translate">Name</label>\n' +
    '      <ng-md-icon icon="input" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.name" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Species\' | translate">Species</label>\n' +
    '      <ng-md-icon icon="subtitles" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.species" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Grade\' | translate">Grade</label>\n' +
    '      <ng-md-icon icon="grade" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.grade" type="text" ng-required="true">\n' +
    '      </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Size\' | translate">Size</label>\n' +
    '      <ng-md-icon icon="add_circle" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.size" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '    <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Quantity\' | translate">Quantity</label>\n' +
    '      <ng-md-icon icon="unfold_more" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input  type="number" ng-model="fish.quantity" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Location\' | translate">Location</label>\n' +
    '      <ng-md-icon icon="my_location" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.location" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Pricing\' | translate">Pricing</label>\n' +
    '      <ng-md-icon icon="attach_money" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input type="number"  ng-model="fish.pricing" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Currency Type\' | translate">Currency Type</label>\n' +
    '      <md-select ng-model="fish.currencytype">\n' +
    '        <md-option ng-repeat="currency in currencies" value="{{currency.cc}}">{{currency.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '  </div>\n' +
    '  <div>\n' +
    '    <md-datepicker ng-model="fish.caughtdate" md-placeholder="Enter Caught Date"></md-datepicker>\n' +
    '  </div>\n' +
    '\n' +
    '  <md-button md-no-ink="" ng-bind="\'Update\' | translate" class="md-raised md-primary md-button md-default-theme" ng-click="updateFish()">\n' +
    '      Update\n' +
    '  </md-button>\n' +
    '\n' +
    '  <div class="container" ng-show="loading" style="margin-top: 5px;margin-bottom:20px;padding: 5px;">\n' +
    '    <md-progress-linear></md-progress-linear>\n' +
    '    <div class="bottom-block">\n' +
    '      <span g-bind="\'Please wait while we update the data\' | translate">Please wait while we update the data</span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('fish/fish-upsert-error.tpl.html',
    '<md-dialog aria-label="Errors">\n' +
    '  <md-toolbar class="md-warn">\n' +
    '    <div class="md-toolbar-tools">\n' +
    '      <h2 ng-bind="\'Errors\' | translate"></h2>\n' +
    '      <span flex></span>\n' +
    '      <md-button class="md-icon-button" ng-click="hide()">\n' +
    '        <ng-md-icon icon="close" size="30" style="fill:white" aria-label="Close dialog"></ng-md-icon>\n' +
    '      </md-button>\n' +
    '    </div>\n' +
    '  </md-toolbar>\n' +
    '  <md-dialog-content style="max-width:800px;max-height:810px;">\n' +
    '    <div ng-repeat="error in errors">\n' +
    '      <div style="margin-top: 10px; text-align: center; padding: 10px;">\n' +
    '        <label ng-bind="\'{{ error.fieldNames[0] + error.message }}\' | translate"></label>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </md-dialog-content>\n' +
    '</md-dialog>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('fish/fish-upsert-success.tpl.html',
    '<md-dialog aria-label="Successful">\n' +
    '  <md-toolbar>\n' +
    '    <div class="md-toolbar-tools">\n' +
    '      <h2 ng-bind="\'Successful Update\' | translate"></h2>\n' +
    '      <span flex></span>\n' +
    '      <md-button class="md-icon-button" ng-click="hide()">\n' +
    '        <ng-md-icon icon="close" size="30" style="fill:white" aria-label="Close dialog"></ng-md-icon>\n' +
    '      </md-button>\n' +
    '    </div>\n' +
    '  </md-toolbar>\n' +
    '  <md-dialog-content style="max-width:800px;max-height:810px;">\n' +
    '    <div style="margin-top: 10px; text-align: center; padding: 10px;">\n' +
    '      <div ng-bind="\'Item is updated.\' | translate">Item is updated.</div>\n' +
    '    </div>\n' +
    '  </md-dialog-content>\n' +
    '</md-dialog>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('fish/fish-view.tpl.html',
    '<div  layout="column"  id="fishContainer"  ng-cloak>\n' +
    '  <br/>\n' +
    '  <div style="padding:8px;">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Name\' | translate">Name</label>\n' +
    '      <ng-md-icon icon="input" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.name" type="text" readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Species\' | translate">Species</label>\n' +
    '      <ng-md-icon icon="subtitles" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.species" type="text"  readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Grade\' | translate">Grade</label>\n' +
    '      <ng-md-icon icon="grade" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.grade" type="text"  readonly="readonly">\n' +
    '      </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Size\' | translate">Size</label>\n' +
    '      <ng-md-icon icon="add_circle" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.size" type="text"  readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '    <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Quantity\' | translate">Quantity</label>\n' +
    '      <ng-md-icon icon="unfold_more" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input  type="number" ng-model="fish.quantity"  readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Location\' | translate">Location</label>\n' +
    '      <ng-md-icon icon="my_location" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="fish.location" type="text"  readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Pricing\' | translate">Pricing</label>\n' +
    '      <ng-md-icon icon="attach_money" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input type="number"  ng-model="fish.pricing"  readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Currency Type\' | translate">Currency Type</label>\n' +
    '      <ng-md-icon icon="attach_money" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input type="text"  ng-model="fish.currencytype"  readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Caught Date\' | translate">Caught Date</label>\n' +
    '      <ng-md-icon icon="attach_money" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input type="text"  ng-model="fish.caughtdate"  readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '\n' +
    '  </div>\n' +
    '  <md-button class="md-raised md-warn" ng-click="bid(fish._id)" ng-show="isAdmin">Bid</md-button>\n' +
    '</div>\n' +
    '\n' +
    '<md-content style="text-align: center">\n' +
    '  <div layout="row" style="height:30px;margin-bottom: 30px">\n' +
    '    <div flex>\n' +
    '       <ng-md-icon icon="remove-circle" ng-click="delete()" size="30" style="fill:red" aria-label="Add"></ng-md-icon>\n' +
    '    </div>\n' +
    '    <div flex>\n' +
    '        <ng-md-icon icon="add_circle" size="30" ng-click="add()" style="fill:gray" aria-label="Off"></ng-md-icon>\n' +
    '    </div>\n' +
    '    <div flex>\n' +
    '       <ng-md-icon icon="border_color" size="30" ng-click="view()" style="fill:orange" aria-label="Cake"></ng-md-icon>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('fish/fishes.tpl.html',
    '<md-content layout-padding="" class="autoScroll">\n' +
    '  <div style="margin-top:2px;text-align: center">\n' +
    '    <ng-md-icon icon="my_library_add" ng-click="go(\'fishes/new\')" size="40" style="fill:#5B5BC5"></ng-md-icon>\n' +
    '  </div>\n' +
    '\n' +
    '  <div style="margin-top:5px;margin-bottom:5px">\n' +
    '    <label ng-bind="\'Total Items\' | translate">Total Items : {{ fishes.length }}</label>\n' +
    '  </div>\n' +
    '\n' +
    '  <md-input-container class="md-icon-float">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '    <label ng-bind="\'Search\' | translate">Search</label>\n' +
    '    <ng-md-icon icon="search" size="24" style="fill:green"></ng-md-icon>\n' +
    '    <input type="text"  ng-model="searchText.$">\n' +
    '  </md-input-container>\n' +
    '  <md-list>\n' +
    '    <md-list-item class="md-3-line" ng-repeat="fish in fishes | filter:searchText">\n' +
    '      <ng-md-icon ng-click="go(\'fishes/\'+fish._id+\'/view\')" icon="info" size="30" style="fill:green"></ng-md-icon>\n' +
    '      <div md-swipe-right="onSwipeRight(\'fishes/\'+fish._id+\'/view\')" class="md-list-item-text" layout="column">\n' +
    '        <h3>{{fish.name }}</h3>\n' +
    '        <h4> {{ fish.pricing  }} : {{ fish.currencytype  }}</h4>\n' +
    '        <p><span ng-bind="\'Caught Date\' | translate">Caught Date</span> : {{ fish.caughtdate}}</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '  </md-list-item>\n' +
    ' </md-list>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('login/login-error.tpl.html',
    '<md-dialog aria-label="Login Error">\n' +
    '  <md-toolbar>\n' +
    '    <div class="md-toolbar-tools">\n' +
    '      <h2 ng-bind="\'Login Error\' | translate"></h2>\n' +
    '      <span flex></span>\n' +
    '      <md-button class="md-icon-button" ng-click="hide()">\n' +
    '        <ng-md-icon icon="close" size="30" style="fill:white" aria-label="Close dialog"></ng-md-icon>\n' +
    '      </md-button>\n' +
    '    </div>\n' +
    '  </md-toolbar>\n' +
    '  <md-dialog-content style="max-width:800px;max-height:810px;">\n' +
    '    <div>\n' +
    '      <h4>Your user id or password is not correct, try again.</h4>\n' +
    '    </div>\n' +
    '  </md-dialog-content>\n' +
    '</md-dialog>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('login/login.tpl.html',
    '<div  layout="column"  id="loginContainer">\n' +
    '  <br>\n' +
    '  <md-content layout-padding="" class="autoScroll">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'User Id\' | translate">User Id</label>\n' +
    '      <ng-md-icon icon="person" size="24" style="fill:rgb(255,64,129)"></ng-md-icon>\n' +
    '      <input ng-model="user.userid" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Password\' | translate">Password</label>\n' +
    '      <ng-md-icon icon="security" size="24" style="fill:rgb(255,64,129)"></ng-md-icon>\n' +
    '      <input ng-model="user.password" type="password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '  </md-content>\n' +
    '</div>\n' +
    '\n' +
    '<md-button md-no-ink="" class="md-raised md-primary md-button md-default-theme" ng-click="checkCredential()">\n' +
    '  Submit\n' +
    '</md-button>\n' +
    '\n' +
    '<div class="container" ng-show="loading" style="padding: 5px;">\n' +
    '  <md-progress-linear></md-progress-linear>\n' +
    '  <div class="bottom-block">\n' +
    '    <span g-bind="\'Please wait while we check your account\' | translate">Please wait while we check your account</span>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/user-add.tpl.html',
    '<div  layout="column" id="userContainer"  ng-cloak>\n' +
    '  <br>\n' +
    '  <md-content layout-padding="" class="autoScroll">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Name\' | translate">Name</label>\n' +
    '      <ng-md-icon icon="person" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.name" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'User Id\' | translate">User Id</label>\n' +
    '      <ng-md-icon icon="person" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.userid" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'I am\' | translate">I am </label>\n' +
    '      <md-select ng-model="user.role">\n' +
    '          <md-option ng-repeat="role in roles" value="{{role.code}}">{{role.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Country\' | translate">Country</label>\n' +
    '      <md-select ng-model="user.country">\n' +
    '          <md-option ng-repeat="country in countries" value="{{country.code}}">{{country.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Language\' | translate">Language</label>\n' +
    '      <md-select ng-model="user.locale" ng-change="toggleLanguage()">\n' +
    '          <md-option ng-repeat="locale in locales" value="{{locale.value}}"> {{locale.name || translate }}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Phone Number\' | translate">Phone Number</label>\n' +
    '      <ng-md-icon icon="phone" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.contactno" type="text">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <label ng-bind="\'Email\' | translate">Email</label>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.email" type="email">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Address\' | translate">Address</label>\n' +
    '      <ng-md-icon icon="place" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.address" type="text">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Password\' | translate">Password</label>\n' +
    '      <ng-md-icon icon="lock" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.password" type="password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Confirm password\' | translate">Confirm password</label>\n' +
    '      <!-- Use floating placeholder instead of label -->\n' +
    '      <ng-md-icon icon="lock" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.confirmpassword" type="password"  ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-switch ng-model="user.notification" aria-label="Receive notifications">\n' +
    '      <span ng-bind="\'Receive Notification\' | translate">Receive Notification</span>\n' +
    '    </md-switch>\n' +
    '  </md-content>\n' +
    '\n' +
    '  <md-button md-no-ink="" ng-bind="\'Submit\' | translate" class="md-raised md-primary md-button md-default-theme" ng-click="createUser()">\n' +
    '    Submit\n' +
    '  </md-button>\n' +
    '</div>\n' +
    '\n' +
    '<div class="container" ng-show="loading" style="padding: 5px;">\n' +
    '  <md-progress-linear></md-progress-linear>\n' +
    '  <div class="bottom-block">\n' +
    '    <span g-bind="\'Please wait while the account creation is in progress\' | translate">Please wait while the account creation is in progress...</span>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/user-edit.tpl.html',
    '<div  layout="column" id="userUpdateContainer"  ng-cloak>\n' +
    '  <br>\n' +
    '  <md-content layout-padding="" class="autoScroll">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Name\' | translate">Name</label>\n' +
    '      <ng-md-icon icon="person" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.name" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'User Id\' | translate">User Id</label>\n' +
    '      <ng-md-icon icon="person" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.userid" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'I am\' | translate">I am </label>\n' +
    '      <md-select ng-model="user.role">\n' +
    '          <md-option ng-repeat="role in roles" value="{{role.code}}">{{role.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Country\' | translate">Country</label>\n' +
    '      <md-select ng-model="user.country">\n' +
    '          <md-option ng-repeat="country in countries" value="{{country.code}}">{{country.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Language\' | translate">Language</label>\n' +
    '      <md-select ng-model="user.locale">\n' +
    '          <md-option ng-repeat="locale in locales" value="{{locale.value}}">{{locale.name}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <ng-md-icon icon="phone" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.contactno" type="text" placeholder="Phone Number">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <label ng-bind="\'Email\' | translate">Email</label>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.email" type="email">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'Address\' | translate">Address</label>\n' +
    '      <ng-md-icon icon="place" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.address" type="text">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-switch ng-model="user.notification" aria-label="Receive notifications">\n' +
    '    <span ng-bind="\'Receive Notification\' | translate">Receive Notification</span>\n' +
    '    </md-switch>\n' +
    '  </md-content>\n' +
    '\n' +
    '  <md-button md-no-ink="" ng-bind="\'Update\' | translate" class="md-raised md-primary md-button md-default-theme" ng-click="updateUser()">\n' +
    '    Update\n' +
    '  </md-button>\n' +
    '</div>\n' +
    '\n' +
    '<div class="container" ng-show="loading" style="padding: 5px;">\n' +
    '  <md-progress-linear></md-progress-linear>\n' +
    '  <div class="bottom-block">\n' +
    '    <span g-bind="\'Please wait while we update your profile\' | translate">Please wait while we update your profile...</span>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/user-upsert-error.tpl.html',
    '<md-dialog aria-label="User Errors">\n' +
    '  <md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h2 ng-show="create" ng-bind="\'Signup Errors\' | translate"></h2>\n' +
    '    <h2 ng-show="update" ng-bind="\'Update Errors\' | translate"></h2>\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" ng-click="hide()">\n' +
    '      <ng-md-icon icon="close" size="30" style="fill:white" aria-label="Close dialog"></ng-md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '  </md-toolbar>\n' +
    '\n' +
    '  <md-dialog-content style="max-width:800px;max-height:810px;">\n' +
    '    <div ng-repeat="error in errors">\n' +
    '      <div style="margin-top: 10px; text-align: center; padding: 10px;">\n' +
    '        <div ng-bind="\'{{ error.fieldNames[0] + error.message }}\' | translate"></div>\n' +
    '        <div ng-show="error.classification == \'UserExistError\'">\n' +
    '          <a ng-bind="\'click here to login to your profile\' | translate"></a>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </md-dialog-content>\n' +
    '</md-dialog>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/user-upsert-success.tpl.html',
    '<md-dialog aria-label="Successful">\n' +
    '  <md-toolbar>\n' +
    '  <div class="md-toolbar-tools">\n' +
    '    <h2 ng-show="create" ng-bind="\'Successful Signup\' | translate"></h2>\n' +
    '    <h2 ng-show="update" ng-bind="\'Successful Update\' | translate"></h2>\n' +
    '    <span flex></span>\n' +
    '    <md-button class="md-icon-button" ng-click="hide()">\n' +
    '      <ng-md-icon icon="close" size="30" style="fill:white" aria-label="Close dialog"></ng-md-icon>\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '  </md-toolbar>\n' +
    '\n' +
    '  <md-dialog-content style="max-width:800px;max-height:810px;">\n' +
    '    <div ng-show="create" style="margin-top: 10px; text-align: center; padding: 10px;" ng-bind="\'Your account is created successfully\' | translate">Your account is created successfully.</div>\n' +
    '    <div ng-show="update" style="margin-top: 10px; text-align: center; padding: 10px;" ng-bind="\'Your account is updated successfully\' | translate">Your account is updated successfully.</div>\n' +
    '  </md-dialog-content>\n' +
    '</md-dialog>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/user-view.tpl.html',
    '<div  layout="column" ng-cloak>\n' +
    '  <br>\n' +
    '  <md-content layout-padding="" class="autoScroll">\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'Name\' | translate">Name</label>\n' +
    '      <ng-md-icon icon="person" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.name" type="text" readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label ng-bind="\'User Id\' | translate">User Id</label>\n' +
    '      <ng-md-icon icon="perm_identity" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.userid" type="text" readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'I am\' | translate">I am</label>\n' +
    '      <ng-md-icon icon="accessibility" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.role" type="text" readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <label ng-bind="\'I am from\' | translate">I am from</label>\n' +
    '      <ng-md-icon icon="home" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.country" type="text" readonly="readonly">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <ng-md-icon icon="phone" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.contactno" type="text" placeholder="Phone Number" ng-readonly="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.email" type="email" placeholder="Email" ng-readonly="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container class="md-block">\n' +
    '      <ng-md-icon icon="place" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.address" type="text" placeholder="Address" ng-readonly="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-switch ng-model="user.notification" aria-label="Receive notifications" ng-disabled="true">\n' +
    '        Receive notification\n' +
    '    </md-switch>\n' +
    '  </md-content>\n' +
    '</div>\n' +
    '\n' +
    '<md-content style="text-align: center">\n' +
    '  <div layout="row" style="height:30px;margin-bottom: 30px">\n' +
    '    <div flex>\n' +
    '    </div>\n' +
    '    <div flex>\n' +
    '        <ng-md-icon icon="mode_edit" size="30" ng-click="edit()" style="fill:gray" aria-label="Off"></ng-md-icon>\n' +
    '    </div>\n' +
    '    <div flex>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</md-content>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('user/users.tpl.html',
    '<div  layout="column" class="inputdemoIcons">\n' +
    '  <br>\n' +
    '  <md-content layout-padding="" class="autoScroll">\n' +
    '    <md-input-container class="md-icon-float">\n' +
    '      <!-- Use floating label instead of placeholder -->\n' +
    '      <label>Name</label>\n' +
    '      <ng-md-icon icon="person" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.name" type="text" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <label>I am </label>\n' +
    '      <md-select ng-model="ctrl.userState">\n' +
    '          <md-option ng-repeat="role in roles" value="{{role}}">{{role}}</md-option>\n' +
    '      </md-select>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container md-no-float="">\n' +
    '      <ng-md-icon icon="phone" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.phone" type="text" placeholder="Phone Number">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.email" type="email" placeholder="Email (required)" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container md-no-float="">\n' +
    '      <ng-md-icon icon="place" size="24" style="fill:dodgerblue"></ng-md-icon>\n' +
    '      <input ng-model="user.address" type="text" placeholder="Address">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.password" type="password" placeholder="Password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <!-- Use floating placeholder instead of label -->\n' +
    '      <ng-md-icon icon="email" size="24" style="fill:red"></ng-md-icon>\n' +
    '      <input ng-model="user.confirm_password" type="password" placeholder="Confirm password" ng-required="true">\n' +
    '    </md-input-container>\n' +
    '    <md-input-container>\n' +
    '      <md-switch ng-model="data.cb1" aria-label="Receive notifications">\n' +
    '        Receive notification\n' +
    '      </md-switch>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '     <md-button md-no-ink="" class="md-primary" ng-click="createUser()">Submit</md-button>\n' +
    '\n' +
    '  </md-content>\n' +
    '\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('fh.templates');
} catch (e) {
  module = angular.module('fh.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('welcome/welcome.tpl.html',
    '<div  id="welcomeContainer">\n' +
    '  <div id="welcome" style="background: white;">\n' +
    '   <md-content layout-padding="">\n' +
    '      <md-list>\n' +
    '        <md-list-item class="md-2-line">\n' +
    '          <div class="md-list-item-text" ng-click="go(\'login\')">\n' +
    '            <ng-md-icon icon="login"  size="30" style="fill:dodgerblue"></ng-md-icon>\n' +
    '            <h3>Login</h3>\n' +
    '            <p>Login into your account</p>\n' +
    '          </div>\n' +
    '        </md-list-item>\n' +
    '        <md-divider></md-divider>\n' +
    '        <md-list-item class="md-2-line m">\n' +
    '          <div class="md-list-item-text" ng-click="go(\'users/new\')">\n' +
    '            <ng-md-icon icon="account_circle"  class="welcome_trans" size="30" style="fill:dodgerblue"></ng-md-icon>\n' +
    '            <h3>Sign Up</h3>\n' +
    '            <p>You can create a new account</p>\n' +
    '          </div>\n' +
    '        </md-list-item>\n' +
    '      </md-list>\n' +
    '    </md-content>\n' +
    '  </div>\n' +
    '  <p style="color: white"> Welcome to Fishhub </p>\n' +
    '</div>\n' +
    '\n' +
    '<style type="text/css">\n' +
    '  #welcomeContainer {\n' +
    '    background: url(\'images/background.png\');\n' +
    '    width: auto;\n' +
    '    height: 700px;\n' +
    '    background-repeat: no-repeat;\n' +
    '    text-align: center;\n' +
    '    background-size: cover;\n' +
    '    padding: 10px;\n' +
    '  }\n' +
    '  #welcome {\n' +
    '    -webkit-box-shadow: 4px 3px 4px 4px #FFFFFF;\n' +
    '    box-shadow: 4px 3px 4px 4px #FFFFFF;\n' +
    '\n' +
    '  }\n' +
    '  .welcome_trans {\n' +
    '    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;\n' +
    '    transition: width 2s, height 2s, transform 2s;\n' +
    '  }\n' +
    '  #welcome a {\n' +
    '    font-size: 18px;\n' +
    '    font-style: italic;\n' +
    '    text-decoration: none;\n' +
    '  }\n' +
    '</style>\n' +
    '\n' +
    '');
}]);
})();
