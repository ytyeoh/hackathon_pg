exports.userMenu = function() {
    return {
        controller: 'UserMenuController',
        templateUrl: '/client/views/usermenu.html'
    };
};

exports.profile = function () {
    return {
        controller: 'ProfileController',
        templateUrl: '/client/views/profile.html'
    };
};

exports.signup = function () {
    return {
        controller: 'SignUpController',
        templateUrl: '/client/views/signup.html'
    }
}

