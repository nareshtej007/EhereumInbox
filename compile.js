//require('.contract/Inbox.sol');// bad practice

const path = require('path'); //provides cross platform compatability and no need to install separately it is build in
const fs = require('fs');
const solc = require('solc');//importing solidity compiler

const inboxPath = path.resolve(__dirname, 'contract' , 'Inbox.sol');//_dirname is inbuilt by node itself it denotes Main directory of project 
const source = fs.readFileSync(inboxPath, 'utf8');// this is to read file data and utf8 is encoding technique to read data

module.exports = solc.compile(source, 1).contracts[':Inbox'];//Here only 1 smartcontract compiled that why we gave as 1 and 
//module.esports exports the compiled file immediatly after compilation
