angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/templates', {
		templateUrl: 'templates/templates.html',
		controller:'TemplatesController'
	}).
	when('/templates/:templateId', {
		templateUrl: 'templates/template-details.html',
		controller:'TemplateDetailsController'
	})
}])

.controller('TemplateController', ['$scope', function  ($scope) {
	
}])

.controller('TemplateDetailsController', ['$scope', function  ($scope) {
	
}]);


