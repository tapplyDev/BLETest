angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.power', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/power.html',
        controller: 'powerCtrl'
      }
    }
  })

  .state('tabsController.chart', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/chart.html',
        controller: 'chartCtrl'
      }
    }
  })

  .state('tabsController.schedule', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.timer', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'templates/timer.html',
        controller: 'timerCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page7',
    views: {
      'tab5': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});