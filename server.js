const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();
//var dbData =[];

// Local Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manage',{ useNewUrlParser: true })
  .then(() => console.log('Connected to database...'))
  .catch(err => console.error(err));

// mongoose.connect('mongodb://127.0.0.1:27017/user-manager', function(err,db) { 
//   if(!err)
//   {
//     this.dbData=db;
//     console.log('Connected to database...');
//   }
// });
//.catch(err => console.error(err));
// Mlab Database
// mongoose.connect('mongodb://nikhil:nikhil001@ds263107.mlab.com:63107/bciit', {
//   auth: {
//     user: 'nikhil',
//     password: 'nikhil001'
//   }}
// )
// .then(() => console.log('Connected to database...'))
// .catch(err => console.error(err));
// mongoose.connect('mongodb://nikhilkumar:Nikhil@001@ds263107.mlab.com:63107/bciit', { useNewUrlParser: true })

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Controllers
const UserControl = require('./src/UserControl');
const CartControl = require('./src/CartControl');
const UserControlContact = require('./src/UserControlContact');
const AddControl = require('./src/AddControl');

// const AdminbusControl = require('./src/AdminbusControl');

// const PassengerDetailControl = require('./src/PassengerDetailControl');
// const DabooknowControl = require('./src/DabooknowControl');
// const FormsearchControl = require('./src/FormsearchControl');

// Routes
app.post('/api/user/create', UserControl.create);
// app.post('/api/user/update', UserControl.update);
app.get('/api/user/retrieve', UserControl.retrieve);
// app.delete('/api/user/delete', UserControl.delete);

app.post('/api/usercart/create', CartControl.create);

app.post('/api/useraddress/create', AddControl.create);

// app.post('/api/newdetails/update', NewControl.update);
// app.get('/api/newdetails/retrieve', NewControl.retrieve);
// app.delete('/api/newdetails/delete', NewControl.delete);

app.post('/api/usercontact/create', UserControlContact.create);

// app.post('/api/adminbus/create', AdminbusControl.create);

// app.post('/api/PassengerBook/create', PassengerDetailControl.create);
// app.get('/api/PassengerBook/retrieve', PassengerDetailControl.retrieve);
// app.post('/api/dabooknow/create', DabooknowControl.create);
// app.get('/api/dabooknow/retrieve', DabooknowControl.retrieve);
// app.get('/api/dabooknow/retrieve_join', DabooknowControl.retrieve_join);
// app.post('/api/formsearch/create', FormsearchControl.create);
// app.get('/api/formsearch/retrieve', FormsearchControl.retrieve);

// Start Server
app.listen(3001, () => console.log('Server has started on port 3001...'));