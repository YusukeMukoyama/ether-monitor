if (Meteor.isClient) {
  Tasks = new Mongo.Collection("tasks");

//  var btc-price = $("#btc-price").val();
 // var btc-price = $("#btc-price input[name=text]").val();
  //Template.contract.ten = btc-price;
  
  Template.contract.events({
    'click #btn': function(event, templates) {
  //    var btc-price = $("#btc-price").val();
      alert('デリバティブ商品が登録されました');
     // alert(btc-price);
    }
  });

  Template.contract.helpers({
    tasks: function(){
      return Tasks.find({});
    }
  });
}
