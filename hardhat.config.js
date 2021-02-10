require("dotenv").config()
// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.5.3",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMYAPIKEY_RINKEBY}`,
      accounts: {mnemonic: process.env.MNEMONIC}
    },
    bsctestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: {mnemonic: process.env.MNEMONIC},
      gas: 90000000
    },
    mainnet: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: {mnemonic: process.env.MNEMONIC},
      gas: 90000000
    }
  }
};