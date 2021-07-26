const UserModelContact = require('../src/UserModelContact');

module.exports = {
  create: (req, res) => {
    let usercontact = new UserModelContact({
      fullname: req.body.fullname,
      email:req.body.email,
      phonenumber:req.body.phonenumber,
      message:req.body.message
    });

    usercontact.save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    UserModelContact.update({_id: req.body._id}, req.body)
      .then(usercontact => {
        if (!usercontact) res.json({ success: false, result: "User does not exist" });

        res.json(usercontact);
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  retrieve: (req, res) => {
    UserModelContact.find()
      .then(result => {
        if (!result) res.json({ success: false, result: "No results found" });

        res.json({ success: true, result: result });
      })
      .catch(err => res.json({success: false, result: err}));
  },
  delete: (req, res) => {
    UserModelContact.remove({_id: req.body._id})
      .then(result => {
        if (!result) res.json({ success: false, result: "No user was found with the ID" });
        res.json({ success: true, result: result });
      })
      .catch(err => res.json({ success: false, result: err }));
  }
}