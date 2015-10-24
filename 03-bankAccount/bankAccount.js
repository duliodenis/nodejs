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

	for (var i=0; i < accounts.length; i++) {
		if (username === accounts[i].username) matchingAccounts.push(accounts[i]);
	}

	return matchingAccounts;
}

var deposit = function(account, amount) {
	if (typeof amount === 'number') {
		console.log("Deposit of " + amount);
		account.balance += amount;		
	} else {
		console.log('Deposit failed. Amount is not a number.')
	}
}


var withdrawal = function(account, amount) {
	if (typeof amount === 'number') {
		console.log("Withdrawal of " + amount);
		account.balance -= amount;		
	} else {
		console.log('Withdrawal failed. Amount is not a number.')
	}
}


var getBalance = function(account) {
	return account.balance;
}


var printBalance = function(account) {
	console.log("Current Balance: " + getBalance(account));		
}

// createBalanceGetter(account) using a closure
// return function() returns account.balance 
var createBalanceGetter = function(account) {
	return function() {
		return account.balance;
	}
} 


// Bank Test Run: create an 'A' and 'B' account, deposit $10 into 'A', Withdraw $5 from 'B'. Result = A($10), B(-$5).
//                deposit 100 into Account A and use the createBalanceGetter closure function.

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

deposit(account[0], 100);

var getABalance = createBalanceGetter(account[0]);
console.log("Account Balance: " + getABalance());

printBalance(AAccount);
deposit(AAccount, 10);
printBalance(AAccount);
withdrawal(BAccount, '5'); // error on type of amount
withdrawal(BAccount, 5);
printBalance(BAccount);
