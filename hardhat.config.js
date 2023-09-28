require("@nomiclabs/hardhat-waffle");

const { ALCHEMY_API_KEY, INFURA_API_KEY } = process.env;
ALCHEMY_API_KEY = "dW2ds5onL4EKOoxEYTIti9b9F0DORkXu";
module.exports = {
solidity: "0.8.19",
networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
},
};