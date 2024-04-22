// Importing dependencies
const { Wallet } = require('electrum');
const bitcoin = require('bitcoinjs-lib');

// Connect to Electrum server
const wallet = new Wallet({
    network: 'testnet',
    electrum: {
        host: 'electrum.example.com',
        port: 50001,
        protocol: 'tls',
    },
});

// Import wallet with private key
async function importWallet(privateKey) {
    try {
        const keyPair = bitcoin.ECPair.fromWIF(privateKey, bitcoin.networks.testnet);
        const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.testnet });
        
        await wallet.importPrivateKey(privateKey);
        
        console.log("Wallet imported successfully!");
        console.log("Address: ", address);
    } catch (error) {
        console.error("Error importing wallet:", error);
    }
}

// Replace 'privateKey' with the actual private key generated
importWallet('your_private_key_here');
