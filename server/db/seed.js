const mongoose = require("mongoose");
const DPXBuys = require("./dopexbuys");
const db = 'mongodb://localhost/dpx_options'
const fetch = require("node-fetch");

// console.log('starting life')

let obj;
let saveCounter = 0;

let strikesList = [
    [
        { 'token': 'ETH', 'strike': 4000 },
        { 'token': 'ETH', 'strike': 4500 },
        { 'token': 'ETH', 'strike': 5000 },
        { 'token': 'ETH', 'strike': 6000 },
        { 'token': 'ETH', 'strike': 7000 },
    ],
    [
        { 'token': 'rDPX', 'strike': 55 },
        { 'token': 'rDPX', 'strike': 66 },
        { 'token': 'rDPX', 'strike': 88 },
        { 'token': 'rDPX', 'strike': 111 },
        { 'token': 'rDPX', 'strike': 133 },
    ], [
        { 'token': 'DPX', 'strike': 1700 },
        { 'token': 'DPX', 'strike': 2000 },
        { 'token': 'DPX', 'strike': 2500 },
        { 'token': 'DPX', 'strike': 3333 },
    ], [
        { 'token': 'gOHM', 'strike': 15000 },
        { 'token': 'gOHM', 'strike': 20000 },
        { 'token': 'gOHM', 'strike': 25000 },
        { 'token': 'gOHM', 'strike': 30000 },
    ],
]

const contracts = [
    '0x711da677a0d61ee855dad4241b552a706f529c70',
    '0xd4cafe592be189aeb7826ee5062b29405ee63488',
    '0x48252edbfcc8a27390827950ccfc1c00152894e3',
    '0x460f95323a32e26c8d32346abe73eb94d7db08d6'
]

const token_finder = function (add, list) {

    for (let i = 0; i < list.length; i++) {
        if (list[i].address == add) {
            return list[i].token
        }
    }
    return null
}

// const token = token_finder(token_contract, thisContractList)

const urls = function (list) {
    let url_list = [];
    for (let i = 0; i < contracts.length; i++) {
        let temp_string1 = ''
        let temp_string2 = temp_string1.concat('https://api.arbiscan.io/api?module=account&action=txlist&address=', list[i], '&startblock=1&endblock=99999999&sort=des')
        console.log(temp_string2)
        url_list.push(temp_string2)
    }
    return url_list
}

const url = urls(contracts)

const type_checker = function (input) {
    if (input.slice(0, 10) == '0xea3bd5df') {
        return 'Purchase'
    } else if (input.slice(0, 10) == '0x8144eeba') {
        return 'Deposit'
    } else {
        return 'Unknown'
    }
}

const purchase_amount_getter = function (input) {
    if (type_checker(input) == 'Purchase') {
        return (parseInt(input.slice(120, 138), 16) * 10 ** -18).toFixed(2) + ' contract(s)'
    } else {
        return null
    }
}

const strike_getter = function (input, address) {
    if (type_checker(input) == 'Deposit') {
        return null
    } else if (type_checker(input) == 'Purchase') {
        const strike_index = input[73]
        const token = token_finder(address, contractList)
        return strike_finder(token, strike_index).strike
    } else {
        return null
    }
}

const strikesArrayGetter = function (token, strikeIndicesArray) {
    let strikesArray = [];
    if (strikeIndicesArray == null) {
        return null
    }
    if (strikeIndicesArray.length == 0) {
        return null
    }

    for (let i = 0; i < strikeIndicesArray.length; i++) {
        strikesArray.push(strike_finder(token, strikeIndicesArray[i]).strike)
    }

    return strikesArray;
}

const strike_finder = function (token, strike_index) {

    let list = [
        [
            { 'token': 'ETH', 'strike': 4000 },
            { 'token': 'ETH', 'strike': 4500 },
            { 'token': 'ETH', 'strike': 5000 },
            { 'token': 'ETH', 'strike': 6000 },
            { 'token': 'ETH', 'strike': 7000 },
        ],
        [
            { 'token': 'rDPX', 'strike': 55 },
            { 'token': 'rDPX', 'strike': 66 },
            { 'token': 'rDPX', 'strike': 88 },
            { 'token': 'rDPX', 'strike': 111 },
            { 'token': 'rDPX', 'strike': 133 },
        ], [
            { 'token': 'DPX', 'strike': 1700 },
            { 'token': 'DPX', 'strike': 2000 },
            { 'token': 'DPX', 'strike': 2500 },
            { 'token': 'DPX', 'strike': 3333 },
        ], [
            { 'token': 'gOHM', 'strike': 15000 },
            { 'token': 'gOHM', 'strike': 20000 },
            { 'token': 'gOHM', 'strike': 25000 },
            { 'token': 'gOHM', 'strike': 30000 },
        ],
    ]

    for (let i = 0; list.length; i++) {
        if (list[i][0].token == token) {
            return list[i][strike_index]
        }
    }
}

const strike_indices_array = function (input) {
    if (type_checker(input) == "Deposit") {

    let strikeArray = [];

    if (input.length > 1600) {
        return null
    }

    strikeArray.push(input[329])
    
    if (input.length > 500) {
        strikeArray.push(input[393])
    }
    if (input.length > 700) {
        strikeArray.push(input[457])
    }
    if (input.length > 800) {
        strikeArray.push(input[521])
    }

    return strikeArray
}
else {
    return null
}
}




const contractList = [
    { 'token': 'ETH', 'address': '0x711da677a0d61ee855dad4241b552a706f529c70' },
    { 'token': 'rDPX', 'address': '0xd4cafe592be189aeb7826ee5062b29405ee63488' },
    { 'token': 'DPX', 'address': '0x48252edbfcc8a27390827950ccfc1c00152894e3' },
    { 'token': 'gOHM', 'address': '0x460f95323a32e26c8d32346abe73eb94d7db08d6' }
]

const api_call1 = async function () {



    mongoose.connect(db)
        .then(() => console.log("mongodb connection success"))
        .catch(error => console.log(error));


    try {
        const response = await fetch(url[3]);
        const json = await response.json();
        obj = json.result;



        for (let i = 0; i < obj.length; i++) {
            let buy = new DPXBuys({
                blockNumber: obj[i].blockNumber,
                timeStamp: obj[i].timeStamp,
                hash: obj[i].hash,
                nonce: obj[i].nonce,
                blockHash: obj[i].blockHash,
                transactionIndex: obj[i].transactionIndex,
                from: obj[i].from,
                to: obj[i].to,
                value: obj[i].value,
                gas: obj[i].gas,
                gasPrice: obj[i].gasPrice,
                isError: obj[i].isError,
                txreceipt_status: obj[i].txreceipt_status,
                input: obj[i].input,
                contractAddress: obj[i].contractAddress,
                cumulativeGasUsed: obj[i].cumulativeGasUsed,
                gasUsed: obj[i].gasUsed,
                confirmations: obj[i].confirmations,
                type: type_checker(obj[i].input),
                purchaseAmount: purchase_amount_getter(obj[i].input),
                token: token_finder(obj[i].to, contractList),
                strike: strike_getter(obj[i].input, obj[i].to),
                strikeIndicesArray: strike_indices_array(obj[i].input),
                strikesArray: strikesArrayGetter(token_finder(obj[i].to, contractList), strike_indices_array(obj[i].input)),
            })
            // console.log(obj[i])

            buy.save(() => {
                console.log("saved: " + buy._id + " token: " + buy.token)
                console.log(saveCounter)
                saveCounter++;

                if (saveCounter === obj.length) {
                    mongoose.disconnect()
                        .then(() => console.log("saved succesfully and mongodb   disconnected"))
                        .catch(error => console.log(error));
                }
            })

        }


    } catch (err) {
        console.log(err);
    }
}

api_call1()