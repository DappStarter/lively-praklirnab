require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name return sister coin hockey entire oppose secret'; 
let testAccounts = [
"0x95bb8d2ff85eb52d6a2af1240d2c435bb4a699ccba00b0f105f4f3f04e5268ad",
"0x6e39b5408f04bc8e787410128861943cbb0e4317a985bb5aa7313c5a5d5b0b25",
"0xda246101c9d2f497659f233cf172b9db0338d4eb434120d09b976ce624bee0ec",
"0x2709e297f613d9922e0e46d41556c1256e313f4751ba8b0e77cd4cfca2b2eccc",
"0xe0e134c33fe17f3df4f9fca94c68ed5712b91b237325844eaf856de25346d72e",
"0x4208bd8348838b24e5f08db3eec5411749cad177f93f4187257a4856d937a41e",
"0xff70afd69f964656da0a911123fb666086934924f77a115d9369aade2878a761",
"0x83082ccebd20f6e35adcf89d8fc65f5241a34063bd0b74ff3dd4044927aad2ef",
"0x5dfeec56db9098dd71e9cb40234d05192db21cf44a3ac39d02baf52d75d500a1",
"0x124b108d23053fece67c09c249cbd893fe952760517befe07420e0af2efe9d0c"
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
            version: '^0.8.0'
        }
    }
};

