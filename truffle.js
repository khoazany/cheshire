const config = require('./config.json')
const HDWalletProvider = require('truffle-hdwallet-provider')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  networks: {
    cheshire: {
      host: 'localhost',
      port: config.portTestnet,
      network_id: 1337,
    },
    thunder: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.THUNDER_RPC, 0, 10),
      network_id: 19, // Thunder Testnet Network ID
      gas: 5000000, 
      gasPrice: 50000000000 // 50 gigaella
    }
  },
}