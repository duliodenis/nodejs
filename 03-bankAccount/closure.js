//
//  Closure
//  closure.js
//
//  Created by Dulio Denis on 10/22/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//
//  Example of a Closure in JavaScript
//  createAdder returns a function that adds the baseNumber
//  to the passed numberToAdd


var createAdder = function(baseNumber) {
	return function(numberToAdd) {
		return baseNumber + numberToAdd;
	}
}

var addTen = createAdder(10); // create a ten adder
console.log(addTen(2)); 	  // 12