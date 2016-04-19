if (Meteor.isClient) {
    Router.configure({
        layoutTemplate: 'layout',
    });
    var MonitorController = RouteController.extend({
        template: 'monitor'
    });
    var ContractController = RouteController.extend({
        template: 'contract'
    });
    var InfoController = RouteController.extend({
        template: 'info'
    });
    var IndexController = RouteController.extend({
        template: 'index'
    });

    Router.map(function() {
        // this.route('root', {
        //     path: '/',
        //     controller: IndexController
        // });
        this.route('monitor', {
            path: '/monitor',
            controller: MonitorController
        });
        this.route('contract', {
            path: '/contract',
            controller: ContractController
        });
        this.route('info', {
            path: '/info',
            controller: InfoController
        });
        this.route('index', {
            path: '/index',
            controller: IndexController
        });
    });
    // var source = 'contract CallOption{    address public buyer;    address public seller;    uint public buyer_jpy;    uint public seller_jpy;    uint public btc_amount;    uint public btc_price;    uint public premium;    uint public exercise_date;    /* This creates an array with all balances */    mapping (address => uint) public balanceOfJPY;    mapping (address => uint) public balanceOfBTC;    mapping (address => uint) public balanceOfPremium;    function CallOption(      address _seller,      uint _seller_jpy,      uint _btc_price,      uint _btc_amount,      uint _premium,      uint _exercise_date      ){      seller = _seller;      balanceOfJPY[seller] = _seller_jpy;      btc_price = _btc_price;      btc_amount = _btc_amount;      premium = _premium;      exercise_date = _exercise_date;    }    function Respond (address _buyer, uint _buyer_jpy) {      buyer = _buyer;      balanceOfJPY[buyer] = _buyer_jpy;      if (balanceOfJPY[buyer] < premium + btc_amount * btc_price) throw;      balanceOfJPY[buyer] -= premium;      balanceOfJPY[seller] += premium;    }    function Exercise (uint _current_btc_price){      if (now < exercise_date) throw;      if (_current_btc_price < btc_price) throw;      balanceOfJPY[buyer] -= btc_price * btc_amount;      balanceOfJPY[seller] += btc_price * btc_amount;      balanceOfBTC[buyer] += btc_amount;      balanceOfBTC[seller] -= btc_amount;    }    function () {      throw;    }}'
    //
    // var sourceCompiled = web3.eth.compile.solidity(source);
    // var contractAbiDefinition = sourceCompiled.CallOption.info.abiDefinition;
    // var contractData = sourceCompiled.CallOption.code;
    // var MyContract = web3.eth.contract(contractAbiDefinition);
    // var contractInstance = MyContract.new(web3.eth.accounts[0],100000, 50000, 1, 5000, 1460958179, {from:web3.eth.accounts[0], data: contractData, gas:500000});
    // console.log(contractInstance);

    var abi = [{    constant: true,    inputs: [],    name: "seller",    outputs: [{        name: "",        type: "address"    }],    type: "function"}, {    constant: true,    inputs: [{        name: "",        type: "address"    }],    name: "balanceOfBTC",    outputs: [{        name: "",        type: "uint256"    }],    type: "function"}, {    constant: true,    inputs: [],    name: "buyer_jpy",    outputs: [{        name: "",        type: "uint256"    }],    type: "function"}, {    constant: true,    inputs: [],    name: "exercise_date",    outputs: [{        name: "",        type: "uint256"    }],    type: "function"}, {    constant: false,    inputs: [{        name: "_buyer",        type: "address"    }, {        name: "_buyer_jpy",        type: "uint256"    }],    name: "Respond",    outputs: [],    type: "function"}, {    constant: true,    inputs: [],    name: "buyer",    outputs: [{        name: "",        type: "address"    }],    type: "function"}, {    constant: true,    inputs: [],    name: "btc_price",    outputs: [{        name: "",        type: "uint256"    }],    type: "function"}, {    constant: false,    inputs: [{        name: "_current_btc_price",        type: "uint256"    }],    name: "Exercise",    outputs: [],    type: "function"}, {    constant: true,    inputs: [{        name: "",        type: "address"    }],    name: "balanceOfJPY",    outputs: [{        name: "",        type: "uint256"    }],    type: "function"}, {    constant: true,    inputs: [],    name: "btc_amount",    outputs: [{        name: "",        type: "uint256"    }],    type: "function"}, {    constant: true,    inputs: [{        name: "",        type: "address"    }],    name: "balanceOfPremium",    outputs: [{        name: "",        type: "uint256"    }],    type: "function"}, {    constant: true,    inputs: [],    name: "premium",    outputs: [{        name: "",        type: "uint256"    }],    type: "function"}, {    constant: true,    inputs: [],    name: "seller_jpy",    outputs: [{        name: "",        type: "uint256"    }],    type: "function"}, {    inputs: [{        name: "_seller",        type: "address"    }, {        name: "_seller_jpy",        type: "uint256"    }, {        name: "_btc_price",        type: "uint256"    }, {        name: "_btc_amount",        type: "uint256"    }, {        name: "_premium",        type: "uint256"    }, {        name: "_exercise_date",        type: "uint256"    }],    type: "constructor"}]
    var address = '0xea0531e8f78a4c5351ca6cee93b375b89a1bad8e'
    var cnt = web3.eth.contract(abi).at(address);
    var result = cnt.Respond.sendTransaction(web3.eth.accounts[1], 100000, {from: web3.eth.accounts[0], gas:500000});
    console.log(result);
}
