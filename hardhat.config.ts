import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import 'hardhat-deploy'
import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config"
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          evmVersion: "istanbul",
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
    ],
  },
  networks: {
    iotexTestnet: {
      url: "https://babel-api.testnet.iotex.io",
      chainId: 4690,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 1000000000000,
    }
  }
};

export default config;
