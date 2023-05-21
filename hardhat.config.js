require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

import('hardhat/config.js').HardhatUserConfig;
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.10',
      },
      {
        version: '0.7.6',
      },
    ],
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL.toString(),
      accounts: [process.env.PRIVATE_KEY_GOERLI.toString()],
    },
    mainnet: {
      url: process.env.ALCHEMY_MAINNET_RPC_URL.toString(),
      accounts: [process.env.PRIVATE_KEY_GOERLI.toString()],
    },
    // ,sepolia: {
    //     url: process.env.SEPOLIA_RPC_URL,
    //     accounts: [process.env.PRIVATE_KEY_GOERLI],
    // },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
    },
  },
};
