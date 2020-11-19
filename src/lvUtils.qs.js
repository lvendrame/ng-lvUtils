lvUtils.factory('$qs', ['$window', function ($window) {    
    if ($window.location.search) {
        return $window.location.search.substr(1).split("&").reduce(function (previousValue, currentValue, index, array) {
            var aux = currentValue.split('=');
            previousValue[aux[0]] = decodeURIComponent(aux[1].replace(/\+/g, " "));
            return previousValue;
        }, {});
    }

    return {};
}]);
