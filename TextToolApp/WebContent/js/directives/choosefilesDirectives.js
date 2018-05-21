myApp.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
                
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});
















////Choose one or more files and display file name(s)
//myApp.directive('ngFileModel', ['$parse', function ($parse) {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            var model = $parse(attrs.ngFileModel);
//            var isMultiple = attrs.multiple;
//            var modelSetter = model.assign;
//            element.bind('change', function () {
//                var values = [];
//                angular.forEach(element[0].files, function (item) {
//                    var value = {
//                       // File Name 
//                        name: item.name,
//                        //File Size 
//                        size: item.size,
//                        //File URL to view 
//                        url: URL.createObjectURL(item),
//                        // File Input Value 
//                        _file: item
//                    };
//                    values.push(value);
//                });
//                scope.$apply(function () {
//                    if (isMultiple) {
//                        modelSetter(scope, values);
//                    } else {
//                        modelSetter(scope, values[0]);
//                    }
//                });
//            });
//        }
//    };
//}]);