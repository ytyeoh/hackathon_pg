var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope) {

  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.images = [];
  
  var dir = "client/img"
  for 