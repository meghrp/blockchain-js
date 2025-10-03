const { Blockchain, Transaction } = require("./blockchain");

let coin = new Blockchain();

coin.createTransaction(new Transaction("address1", "address2", 100));
coin.createTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting the miner...");
coin.minePendingTransactions("xavier-address");

console.log("\nBalance of Xavier is", coin.getBalanceOfAddress("xavier-address"));

console.log("\n Starting the miner again...");
coin.minePendingTransactions("xavier-address");

console.log("\nBalance of Xavier is", coin.getBalanceOfAddress("xavier-address"));