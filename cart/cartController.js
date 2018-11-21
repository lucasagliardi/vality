mainApp.controller("cartController", function($scope, dadosInfo){

    $scope.produtos = {};

    dadosInfo.success(function(data) { 
        console.log(data);
        $scope.produtos = data.produtos;

    });
});