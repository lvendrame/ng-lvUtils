lvUtils.factory('$qs', ['$window', function ($window) {
    var qs;
    if ($window.location.search) {
        qs = $window.location.search.substr(1).split("&").reduce(function (previousValue, currentValue, index, array) {
            var aux = currentValue.split('=');
            previousValue[aux[0]] = decodeURIComponent(aux[1].replace(/\+/g, " "));
            return previousValue;
        }, {});
    } else { qs = {}; }

    return qs;
}]);