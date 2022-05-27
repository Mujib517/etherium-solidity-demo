// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract Inbox {
    string public message;

    constructor(string memory initMsg){
        message = initMsg;
    }

    function getMessage() public view returns (string memory){
        return message;
    }

    function setMessage(string memory newMsg) public {
        message = newMsg;
    }
}
