const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface , bytecode } = require('./compile');  //here interface is ABI

const provider = new HDWalletProvider(
    'panther enjoy birth budget blanket mistake garbage region other agent door craft',
    'https://rinkeby.infura.io/v3/f6865de654414586849dbd3ee3ddf70b'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    await new web3.eth.Contract(JSON.parse(interface)) //web3 is instance of Web3 and accesing ethereum using eth and creating new contract 
    

}
