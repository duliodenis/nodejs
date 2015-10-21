//
//  Bank Account
//  bankAccount.js
//
//  Created by Dulio Denis on 10/17/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//


// Array of Accounts
var accounts = [];


// Creates an account and adds it to the array of accounts
// Returns: an account object
var createAccount = function(account) {
	accounts.push(account);
	return account;
}


// Finds matching accounts using a forEach on the array of accounts
var getAccount = function(username) {
	var matchingAccounts = [];
	accounts.forEach(function(account){
		if (username === account.username) matchingAccounts.push(account);
	});
	return matchingAccounts;
}

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
 

// Bank Test Run: create an 'A' and 'B' account, deposit $10 into 'A', Withdraw $5 from 'B'. Result = A($10), B(-$5).

var AAccount = createAccount({
	balance: 0,
	username: "A"
});

var BAccount = createAccount({
	balance: 0,
	username: "B"
});

var account = getAccount("A");
console.log("Matches = " + account.length);

printBalance(AAccount);
deposit(AAccount, 10);
printBalance(AAccount);
withdrawal(BAccount, 5);
printBalance(BAccount);