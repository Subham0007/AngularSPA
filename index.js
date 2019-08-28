var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/banana", {
        templateUrl : "VALIDATION-FORM.html",
        controller: "mainController"
    })
    .when("/tomato", {
        templateUrl : "about.html"
    });
});



app.controller('mainController', function($scope){
    
    $scope.user={"name":"" ,"username":"","email":"","today":"","gender":""};
    $scope.Data=[];
    $scope.originalStudent = ["Male","Female","Others"];
    $scope.arrlist = [
             {"userid": 1,
             "name": "Math"}, 
             {"userid": 2,
             "name": "Science"}, 
             {"userid": 3,
             "name": "History"}];
    $scope.submitForm= function() {

			if ($scope.userForm.$valid) {
				alert('Thankyou For Your Submission');
                 $scope.Data.push($scope.user);
                localStorage.setItem('UserData', JSON.stringify($scope.Data)); 
            
            };
       
			
           };
    
       /*$scope.getdata=function(){
           $scope.storage=JSON.parse(localStorage.getItem("UserData"));
           $scope.Data=($scope.storage.length>1) ? $scope.storage : [];
       }();*/
    
});
