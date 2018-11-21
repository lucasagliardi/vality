mainApp.controller("identificationController", function($scope, $routeParams, $filter, dadosInfo){
    $scope.produtos = {};
    $scope.produto = {};
    $scope.pagamento = {};
    $scope.resumeIsOpen = false;
    $scope.celularIsOpen = false;
    $scope.emailIsOpen = false;

    dadosInfo.success(function(data) { 
        $scope.produtos = data.produtos;
        $scope.pagamento = data.pagamento;
        $scope.produto = $filter('filter')($scope.produtos, function (produto) {
            return produto.cliente.id == $routeParams.id;
        })[0];
    });

     $scope.openResume = function(){
        $scope.resumeIsOpen = !$scope.resumeIsOpen;
    }
    $scope.editarCelular = function(){
        $scope.celularIsOpen = !$scope.celularIsOpen;
    }
    $scope.editarEmail = function(){
        $scope.emailIsOpen = !$scope.emailIsOpen;
    }
});