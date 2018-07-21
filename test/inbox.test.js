const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); // to access perticular provider Here we are creating instance of constuctor(Web3)
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

//Const INITIAL_MESSAGE = 'Hi there'// you can use it instead of string 
beforeEach(async () => {
  //Get a list of all accounts
accounts = await web3.eth.getAccounts();


  //   .then(fetchedAccounts => { 
//       console.log(fetchedAccounts); this code is before async await
//   });

  //Use one of those accounts to deploy the contract


 inbox = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({ data: bytecode, arguments: ['Hi there!']}) // constructor function accepts multiple aruguments
     .send({ from: accounts[0], gas: '1000000'})// when ever you modifies contract you have to specify the gas

   //  inbox.setProvider(provider);
    });

describe('Inbox', () => {
      it('deploys a contarct', () => { //when you deply contract it generate default message
      assert.ok(inbox.options.address); //asserting deployment(here address property is assigned to options object) after deploymetn address property contains address
    });
      it('has a default message', async() => {
        const message = await inbox.methods.message().call();//method has functions (we created message() and setMessage() in this application) 
        //in first set of paranthesis no need to pass object, second set describes how that first paranthesis calls
        assert.equal(message, 'Hi there!');
      });
      //console.log(inbox); //added to see result
      it('can change the message', async () => {
        await inbox.methods.setMessage('bye').send({ from: accounts[0] }) //no need to specify this line ot variable in this test case
        const message = await inbox.methods.message().call();// here we are returning message & that message is must match with our asset value
        assert.equal(message, 'bye');

     
  });
}); 