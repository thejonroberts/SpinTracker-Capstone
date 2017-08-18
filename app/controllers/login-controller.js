'use strict';

SpinTracker.controller("LoginController", function($q, $http, $scope, $window, FirebaseUrl, UserFactory) {

	$scope.login = () => {
        UserFactory.loginUser()
        .then( (data) => {
        	console.log('data', data);
            let currentUser = data.user.uid;
            $window.location.href = '#!/news';
        });
    };

});
