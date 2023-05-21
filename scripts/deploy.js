const hre = require('hardhat');
const { network } = require('hardhat');
const { developmentChains } = require('../helper-hardhat-config');
const { verify } = require('../utils/verify');

async function main() {
  let arguments = ['0x...', 10];

  const ICO = await hre.ethers.getContractFactory('ICO');
  const ico = await ICO.deploy(...arguments);

  await ico.deployed();
  console.log(`ICO contract deployed at: ${ico.address}`);

  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    console.log('Verifying...');
    await verify(ico.address, arguments);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
