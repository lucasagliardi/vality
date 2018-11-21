mainApp.factory('dadosInfo', function($http) { 
    return $http.get('dados.json');
});