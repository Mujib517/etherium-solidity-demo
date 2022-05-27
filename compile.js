const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const src = fs.readFileSync(inboxPath, 'utf-8');

var input = {
    language: 'Solidity',
    sources: {
        'inbox': {
            content: src
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
}

const response = JSON.parse(solc.compile(JSON.stringify(input)));
module.exports = response.contracts.inbox.Inbox;