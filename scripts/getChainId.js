const hre = require('hardhat');
const chainId = hre.network.config.chainId
const networkName = hre.network.name
console.log(`networkName: ${networkName}`)
console.log(`chainId: ${chainId}`)

const address = 'some address';
hre.ethers.provider.getBalance(address).then((balance) => {
  console.log(hre.ethers.utils.formatEther(balance));
});