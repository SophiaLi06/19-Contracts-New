module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 3000000
    },
    ropsten:  {
        network_id: 3,
        host: "172.16.163.129",
        port:  8545,
        gas: 4600000,
        gasPrice: 10000000000,
   }
  },
  compilers: {
    solc: {
      version: "0.4.17"
    }
 }
};

