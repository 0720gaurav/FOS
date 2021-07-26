const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();
//var dbData =[];

// Local Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manage',{ useNewUrlParser: true })
  .then(() => console.log('Connected to database...'))
  .catch(err => console.error(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Controllers
const UserControl = require('./src/UserControl');
const CartControl = require('./src/CartControl');
const UserControlContact = require('./src/UserControlContact');
const AddControl = require('./src/AddControl');


// Routes
app.post('/api/user/create', UserControl.create);
// app.post('/api/user/update', UserControl.update);
app.get('/api/user/retrieve', UserControl.retrieve);
// app.delete('/api/user/delete', UserControl.delete);

app.post('/api/usercart/create', CartControl.create);

app.post('/api/useraddress/create', AddControl.create);

app.post('/api/usercontact/create', UserControlContact.create);



// Start Server
app.listen(3001, () => console.log('Server has started on port 3001...'));
