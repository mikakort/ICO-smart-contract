// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import {IERC20} from "./IERC20.sol";

contract ICO {
    address payable owner;
    IERC20 token;
    uint256 exchangeRate;

    constructor(address _tokenAddress, uint256 _exchangeRate) {
        owner = payable(msg.sender);
        token = IERC20(_tokenAddress);
        exchangeRate = _exchangeRate;
    }

    function buyTokens() public payable {
        uint256 tokens = (msg.value / 1e18) * exchangeRate;
        require(
            token.balanceOf(address(this)) >= tokens,
            "Not enough tokens available"
        );
        token.transfer(msg.sender, tokens);
    }

    function withdrawETH() external onlyOwner {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Transfer failed.");
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the contract owner can call this function"
        );
        _;
    }

    receive() external payable {}
}
