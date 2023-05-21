const hre = require('hardhat');
const { network } = require('hardhat');
const { developmentChains } = require('../helper-hardhat-config');
const { verify } = require('../utils/verify');

async function main() {
  let arguments = ['0x...', 10];

  const FlashLoanARB = await hre.ethers.getContractFactory('FlashLoanArbitrage');
  const flashLoanARB = await FlashLoanARB.deploy(...arguments);

  await flashLoanARB.deployed();
  console.log(`Flash loan contract deployed at: ${flashLoanARB.address}`);

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    console.log('Verifying...');
    await verify(flashLoanARB.address, arguments);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
