angular.module('fh.i18n', ['pascalprecht.translate']).config(function($translateProvider) {
  $translateProvider.fallbackLanguage('en');
  return $translateProvider.preferredLanguage('en');
}).run(function($translate, $window) {
  return $translate.use($window.locale);
});
