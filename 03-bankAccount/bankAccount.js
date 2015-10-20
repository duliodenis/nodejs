//
//  Bank Account
//  bankAccount.js
//
//  Created by Dulio Denis on 10/17/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//

var account = {
	balance: 0
};

var deposit = function(account, amount) {
	console.log("Deposit of " + amount);
	account.balance += amount;
}

var withdrawal = function(account, amount) {
	console.log("Withdrawal of " + amount);
	account.balance -= amount;
}

var getBalance = function(account) {
	return account.balance;
}

var printBalance = function(account) {
	console.log("Current Balance: " + getBalance(account));
}
 

// Bank Test Run: deposit $10, Withdraw $5. Result = $5
printBalance(account);
deposit(account, 10);
printBalance(account);
withdrawal(account, 5);
printBalance(account);