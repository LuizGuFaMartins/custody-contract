import "@nomicfoundation/hardhat-toolbox";
import "@okxweb3/hardhat-explorer-verify";
import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenvConfig();

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  sourcify: {
    enabled: true,
  },
  networks: {
    polygonAmoy: {
      url: process.env.PROVIDER_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 80002,
    },
  },
  etherscan: {
    apiKey: {
      polygonAmoy: process.env.API_KEY || "",
    },
  }
};

export default config;
