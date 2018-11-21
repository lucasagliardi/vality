mainApp.controller("simulationController", function($scope, $location, $timeout, $routeParams, $filter, dadosInfo){
    $scope.produtos = {};
    $scope.produto = {};
    $scope.pagamento = {};
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

    $scope.fazerPedido = function(){
        $scope.pedidoSucesso = true;
        $timeout(function() {
            $location.path('/cart');
        }, 3000);
    }

});