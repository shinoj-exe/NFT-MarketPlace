require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/gi6rr6-LO8orqJmnS4HwJxf_S9Jhn-cu",
      accounts: [ "f5f7d142dc21246522bf2e229f019457867ec3bb61d1a2c0a8cb051aca7e4aad" ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};