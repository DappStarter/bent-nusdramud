require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food trap rifle mushroom equip hope private army genuine'; 
let testAccounts = [
"0x44810ce135df522358dd5f259b16376650d72877e84b3c41b0190c246289caaa",
"0xe466a03a31436f44a4e680da7c0175a1a1cf37fb81ad9c17f02577086c1136cc",
"0x9b27356922bcc0c03bb795a12afa340c79a7c1b8de68cd8ee409e15d9643e227",
"0x7ac17d8574297758a3d04e01575b177036d0f5be4905b7dca76433a36161a7af",
"0x846873cd72f4a72399aead494cda53ab7121da789ea2b49537f21b4b957ca194",
"0xd2df17ae92792f09e3b3c3f61974cda77b06dc23f9bae9687cd998f134b57bff",
"0x1668ceda32226b372bfce96e16d279db5cb18bfad0df4788be207905d6ff35f2",
"0x42b76a3579b976f145fe895237362404b4770fefdbe87adc2783beca9525e845",
"0x092309adaea2c1c26aceb397cf34ad4c0847b80e1d8d8d0029874556d9d260b0",
"0x48a66665d0d6e1e810789f97483716bb66ef264e13ec4c073f1ea2fe83036862"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
