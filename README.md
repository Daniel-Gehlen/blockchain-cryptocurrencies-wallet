# Blockchain Cryptocurrencies Wallet

# Technical Report: Bitcoin Wallet Generator and Import to Electrum

## Introduction:
The objective of this project was to develop a Bitcoin wallet generator that generates pairs of public and private keys, as well as allowing the import of these wallets to Electrum, a desktop application for Bitcoin wallet management.

## Development:
To meet the project requirements, the following technologies and libraries were used:

- Node.js: An asynchronous event-driven JavaScript runtime platform.
- bip32: A library for generating deterministic hierarchies of private and public keys.
- bip39: A library for generating mnemonic seeds from English phrases.
- bitcoinjs-lib: A library for interacting with the Bitcoin blockchain, allowing the generation of addresses and transactions.
- Electrum: A desktop application for Bitcoin wallet management.

## Implemented Features:

### Bitcoin Wallet Generation:
- The bip32, bip39, and bitcoinjs-lib libraries were used to generate a Bitcoin wallet.
- The wallet was generated from a mnemonic seed, which was converted into a root key.
- From the root key, private and public keys were derived for the wallet.

### Import to Electrum:
- A draft was created to import the generated wallet to Electrum.
- The Electrum library was used to connect to an Electrum server.
- Import of the wallet to Electrum was implemented using the generated private key.

## Project Structure:
The project is structured into two main files within the src directory:

- create_wallet.js: This file contains the code to generate a Bitcoin wallet.
- electrum_import.js: This file contains a draft to import the generated wallet to Electrum.
Additionally, the project includes the package.json and package-lock.json files to manage dependencies and set up execution scripts.

## Conclusion:
The project successfully met the proposed requirements, providing a functional Bitcoin wallet generator and a draft for import to Electrum. Although the import to Electrum is still a draft and needs further development and testing, the foundation has been established for full integration. This project can be expanded with more features and refinements to meet specific use case scenarios.
