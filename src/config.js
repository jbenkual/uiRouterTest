app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'src/views/home.html', controller: 'homeCtrl' })
    .state('about', { url: '/about', templateUrl: 'src/views/about.html' });     
});