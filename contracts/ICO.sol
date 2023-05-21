// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import {IERC20} from "./IERC20.sol";

contract ICO {
    address payable owner;
    IERC20 token;

    constructor(address _tokenAddress, int256 price) {
        owner = payable(msg.sender);
        token = IERC20(_tokenAddress);
    }
}
