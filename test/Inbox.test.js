const Web3 = require('web3');
const ganache = require('ganache-cli');
const { abi, evm } = require('../compile');

const web3 = new Web3(ganache.provider());

describe('Inbox Contract', () => {
    let accounts;
    let contract;

    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
        contract = await new web3.eth.Contract(abi)
            .deploy({ data: evm.bytecode.object, arguments: ['Hello'] })
            .send({ from: accounts[0], gas: '1000000' });
    });

    it('should deploy contract ', () => {
        expect(contract.options.address).toBeDefined();
    });

});