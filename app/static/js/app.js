
var app = angular.module('app', []);

app.controller('mainController', ['$scope', function($scope) {

	$scope.api = "localhost:5000/search";
	$scope.results = '';
	$scope.car = {
		types : [
			"Sedan",
			"SUV",
			"Truck",
			"Coupe",
			"Convertible",
			"Wagon",
			"Van",
			"Crossover"
		],
		features : [
			'Cruise Control',
			'3rd Row Seats',
			'Backup Camera',
			'Multizone Climate',
			'Rear seat entertainment',
			'Navigation',
			'Bluetooth',
			'Heated Seats',
			'Leather Seats',
			'Sunroof',
			'Power Drivers seat',
			'Heated Steering Wheel',
			'Remote Start',
			'Premium Audio'
		],
		colors : [
		    'Black',
		    'Blue',
		    'Brown',
		    'Gold',
		    'Gray',
		    'Green',
		    'Orange',
		    'Purple',
		    'Red',
		    'Silver',
		    'White',
		    'Yellow'
		],				
		colors : [
			'White',
			'Black',
			'Blue',
			'Red',
			'Silver'
		],
		transmissions : [
			'Automatic',
			'Manual'
		],
		drivetrains : [
			'Front-wheel drive',
			'Four Wheel Drive'
		],
		engines : [
			'4',
			'2'
		]
	};	

	$scope.selected = {
		"new_car" : 1,
		"price_min": 0,
		"price_max": 0,
		"preference": "",
		"feature1": "",
		"feature2": "",
		"feature3": "",
		"specifics1": "",
		"specifics2": "",
		"specifics3": "",
		"specifics4": ""
	};

    $scope.loadResults = function() {

    	var results = [
    			{
    				make : 'Ford',
    				model : 'Escort',
    				year : '1998'
    			},
    			{
    				make : 'Toyota',
    				model : 'Corolla',
    				year : '2001'
    			},
    			{
    				make : 'Toyota',
    				model : 'Corolla',
    				year : '2001'
    			}
    		];

        $scope.results = results;

        console.log($scope.results);

    };

    $scope.nextStep = function(event) {
		$scope.changeStep(event, 'next');
    };

    $scope.prevStep = function(event) {
       	$scope.changeStep(event, 'prev');
    };

    $scope.resetForm = function(event) {
       	$scope.selected = {};
       	$scope.changeStep(event, 'first');
    }

    $scope.changeStep = function(event, step) {

        var target = angular.element(event.target);
        var thisStep = target.parents('section');
        var stepToLoad;

    	switch (step) {
    		case "next":
        		stepToLoad = thisStep.next();
        		break;
    		case "prev":
        		stepToLoad = thisStep.prev();
        		break;
    		case "first":
        		var steps = thisStep.siblings();
        		stepToLoad = angular.element(steps[0]);
        		break;
    	}

        if (stepToLoad.id == 'results') {
        	$scope.loadResults();
        }

        thisStep.hide();
        stepToLoad.show();

        console.clear();
        console.dir($scope.selected);

        const util = require('util');

		// console.log(util.inspect(myObject, {showHidden: false, depth: null}))

		// alternative shortcut
		console.log(util.inspect($scope.selected, false, null))

    }

}]);