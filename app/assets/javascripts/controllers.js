exports.UserMenuController = function($scope, $user) {
        $scope.user = $user;
};

exports.LoginController = function($scope, $routeParams, $http) {
    
    
    $http.
        get('https://wowapp2.herokuapp.com/locations.' + encoded).
        success(function(data) {
            $scope.data = data;
        });
};

exports.ProfileController = function($scope, $routeParams, $http) {
    $http.
        get('/profile').
        success(function(data) {
            $scope.data = data;
        });
};

exports.SignupController = function($scope, $routeParams, $http) {
    $http.
        get('/signup' ).
        success(function(data) {
            $scope.data = data;
        });
}
