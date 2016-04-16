Tasks = new Mongo.Collection("tasks");
Template.contractDeploy.helpers({
  tasks: function(){
    return Tasks.find({});
  },
  btcPrice: function(){  //ファンクション名を記載 -> このファンクション名をtempleteのhtmlファイルが用いる
    return Tasks.find({});
    // return web3.currentProvider.host; //web3のメソッドを記載
  },
  isMining: function(){
    return Session.get('isMining');
  },
  currentHashrate: function(){
    return Session.get('isMining');
  },
  currentPeerCount: function(){
    return Session.get('isMining');
  }
});
