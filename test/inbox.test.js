const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());// to access perticular provider Here we are creating instance of constuctor(Web3)
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async() => {
  //Get a list of all accounts
accounts = await web3.eth.getAccounts();


  //   .then(fetchedAccounts => { 
//       console.log(fetchedAccounts); this code is before async await
//   });

  //Use one of those accounts to deploy the contract

 inbox = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({ data: bytecode, arguments: ['Hi there!']})
     .send({ from: accounts[0], gas: '1000000'})// when ever you modifies contract you have to specify the gas
});

describe('Inbox', () => {
  it('deploys a contarct', () => {
      console.log(inbox);//added to see result
  });
});