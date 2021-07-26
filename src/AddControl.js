const AddModel = require('../src/AddModel');

module.exports = {
  create: (req, res) => {
    let useraddress = new AddModel({
        // cartTotal, price,title,count
        // cartTotal: req.body.cartTotal,
        // price: req.body.price,
        // title: req.body.title,
        // count: req.body.count,
      username: req.body.username,
      phonenumber: req.body.phonenumber,
      address: req.body.address
      //team: req.body.team
    });

    useraddress.save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    AddModel.update({_id: req.body._id}, req.body)
      .then(user => {
        if (!user) res.json({ success: false, result: "User does not exist" });

        res.json(user);
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  retrieve: (req, res) => {
    AddModel.find()
      .then(result => {
        if (!result) res.json({ success: false, result: "No results found" });

        res.json({ success: true, result: result });
      })
      .catch(err => res.json({success: false, result: err}));
  },


  
  delete: (req, res) => {
    AddModel.remove({_id: req.body._id})
      .then(result => {
        if (!result) res.json({ success: false, result: "No user was found with the ID" });
        res.json({ success: true, result: result });
      })
      .catch(err => res.json({ success: false, result: err }));
  }
}