const Web3 = require('web3');
const ganache = require('ganache-cli');

const web3 = new Web3(ganache.provider());

describe('Inbox Contract', () => {
    let accounts;

    beforeEach(async () => {
        accounts = await web3.eth.getAccounts();
    });

    it('should pass ', () => {
        expect(true).toBe(true);
    });

});