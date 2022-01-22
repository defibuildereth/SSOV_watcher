use dpx_options;

load("api_call.js");

// const { default: module123 } = require("./api_call");

db.dropDatabase();

db.buys.insertMany([query_api().result])

// db.buys.insertMany([
//     {
//         "blockNumber": "4498925",
//         "timeStamp": "1641684234",
//         "hash": "0x46620bf854e078d4e3881dd5cc90c0387ea59d9520003e2b0f75c5085c52ff91",
//         "nonce": "1",
//         "blockHash": "0xd9d6f5fb738ecce453e0b05a5f60369e72a3b23af3e3fcebeac672f138c10fac",
//         "transactionIndex": "0",
//         "from": "0xbe732807642db5ef501c64ca898c56d77950c294",
//         "to": "0x711da677a0d61ee855dad4241b552a706f529c70",
//         "value": "1172286609434862",
//         "gas": "1244367",
//         "gasPrice": "1523841210",
//         "isError": "0",
//         "txreceipt_status": "1",
//         "input": "0xea3bd5df00000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000de0b6b3a7640000000000000000000000000000be732807642db5ef501c64ca898c56d77950c294",
//         "contractAddress": "",
//         "cumulativeGasUsed": "368580",
//         "gasUsed": "1112860",
//         "confirmations": "10884"
//     },
//     {
//         "blockNumber": "4479263",
//         "timeStamp": "1641641713",
//         "hash": "0xa924bf88f998288fcf215074067c61d64f2c01d91f743c8e4f1c436e157c3faa",
//         "nonce": "264",
//         "blockHash": "0x85ca69c0480a14358d0b02a6af2fb391a5a3ca259fd67afe13cb50a54c60cac1",
//         "transactionIndex": "0",
//         "from": "0x5a5ec18fcf9db025d24c3674dd48ff40d5305204",
//         "to": "0x711da677a0d61ee855dad4241b552a706f529c70",
//         "value": "54268608373502104",
//         "gas": "1249784",
//         "gasPrice": "1361506687",
//         "isError": "0",
//         "txreceipt_status": "1",
//         "input": "0xea3bd5df0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000001bc16d674ec8000000000000000000000000000005a5ec18fcf9db025d24c3674dd48ff40d5305204",
//         "contractAddress": "",
//         "cumulativeGasUsed": "368444",
//         "gasUsed": "1116404",
//         "confirmations": "30546"
//     },
//     {
//         "blockNumber": "4508960",
//         "timeStamp": "1641721065",
//         "hash": "0x66d94f30615a6ed91deaf832792e277721c3257821b70374a0d415ad7b8cc267",
//         "nonce": "14",
//         "blockHash": "0x37d937d5221e8d8c378ec36a40999dbb5aaf1a826684a289efb5456620e7af57",
//         "transactionIndex": "0",
//         "from": "0xbff254c645b5dca867569c8475d172144f431797",
//         "to": "0xd4cafe592be189aeb7826ee5062b29405ee63488",
//         "value": "0",
//         "gas": "1122260",
//         "gasPrice": "1499462320",
//         "isError": "0",
//         "txreceipt_status": "1",
//         "input": "0xea3bd5df00000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000de0b6b3a7640000000000000000000000000000bff254c645b5dca867569c8475d172144f431797",
//         "contractAddress": "",
//         "cumulativeGasUsed": "70894",
//         "gasUsed": "801834",
//         "confirmations": "849"
//     },
//     {
//         "blockNumber": "4350830",
//         "timeStamp": "1641334105",
//         "hash": "0xdf16e51bb3bf2848282515ead7796f5963c1eebbd7f2263551dae0f314f45a7d",
//         "nonce": "1004",
//         "blockHash": "0x0fe0b311163dafa9e6f339115f6e7bfd1a41ec271bbe71763cd3df66d9112417",
//         "transactionIndex": "0",
//         "from": "0x39fc4cdaa0e79efe7687822f1c0bacc87e1deede",
//         "to": "0x48252edbfcc8a27390827950ccfc1c00152894e3",
//         "value": "0",
//         "gas": "2005782",
//         "gasPrice": "4000000000",
//         "isError": "0",
//         "txreceipt_status": "1",
//         "input": "0xea3bd5df0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001158e460913d0000000000000000000000000000039fc4cdaa0e79efe7687822f1c0bacc87e1deede",
//         "contractAddress": "",
//         "cumulativeGasUsed": "671896",
//         "gasUsed": "1402376",
//         "confirmations": "158979"
//     },
//     {
//         "blockNumber": "4509147",
//         "timeStamp": "1641721779",
//         "hash": "0x405657671b3045662d6929ea7c8d5d757e598c01ac09ff0fc1a36bfc069ba1ec",
//         "nonce": "45",
//         "blockHash": "0xf02a546739fc82c09f8ff70fdd180163d80d72ceddfcaa9bddb749b2a21b14d6",
//         "transactionIndex": "0",
//         "from": "0x44440aa675ae3196e2614c1a9ac897e5cd6f8545",
//         "to": "0x460f95323a32e26c8d32346abe73eb94d7db08d6",
//         "value": "0",
//         "gas": "1230937",
//         "gasPrice": "1499462320",
//         "isError": "0",
//         "txreceipt_status": "1",
//         "input": "0xea3bd5df0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000011c37937e08000000000000000000000000000044440aa675ae3196e2614c1a9ac897e5cd6f8545",
//         "contractAddress": "",
//         "cumulativeGasUsed": "369734",
//         "gasUsed": "1099294",
//         "confirmations": "662"
//     }
// ])