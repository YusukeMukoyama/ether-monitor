var Options = new Mongo.Collection("options");
Options.attachSchema(new SimpleSchema({
  price: {
    type: Number,
    label: "Price",
    max: 200
  },
  amount: {
    type: Number,
    label: "Amount",
  },
  premium: {
    type: Number,
    label: "Premium",
    optional: true
  },
  expirationDate: {
    type: Date,
    label: "Expiration Date",
    min: 0
  },
  position: {
    type: Boolean,
    label: "Position",
    optional: true,
  }
}));
