const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate('05dfaab6be8d75b0c2b0ae0fe5fe1ae13639b449f243060fc9191c1cadc57282');
const myWalletAddress = myKey.getPublic('hex');

let coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'pubkey address here', 10);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);

console.log("\n Starting the miner...");
coin.minePendingTransactions(myWalletAddress);

console.log("\nBalance of Xavier is", coin.getBalanceOfAddress(myWalletAddress));

coin.chain[1].transactions[0].amount = 1;

console.log("Is chain valid?", coin.isChainValid());