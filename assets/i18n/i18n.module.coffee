angular.module('fh.i18n', ['pascalprecht.translate'])

  .config(($translateProvider) ->
    $translateProvider.fallbackLanguage 'en'
    $translateProvider.preferredLanguage 'en'
  )

  .run(($translate, $window) ->
    $translate.use($window.locale)
  )