lvUtils.directive("ngFormat", ['dateFilter', function (dateFilter) {
	return {
		require: '^ngModel',
		restrict: 'A',
		link: function (scope, elm, attrs, ctrl) {
			var dateFormat = attrs.ngFormat;
			var model = attrs.ngModel;

			scope.$watch(model, function (value) {
				var newValue = dateFilter(value, dateFormat);
				ctrl.$setViewValue(newValue);
				ctrl.$render();
			});
		}
	};
}]);