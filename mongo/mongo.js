var mongoose = require('mongoose');
var util = require('util');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var customerSchema = new Schema({
    name: { type: String, required: true }
});

var Customer = mongoose.model('Customer', customerSchema);
var customer = new Customer();
customer.name = 'Andrew Keig' ;

customer.save(function (err) {
    if (err) {
        console.log(err);
        return false;
    }
});

mongoose.connect('mongodb://127.0.0.1:27017/air');

Customer.findById(customer._id, function (err, doc) {
    if (err) {
        console.log('Error finding customer by id');
        return false;
    }
    if (doc == null) {
        console.log('Cannot find customer by id');
        return false;
    }
    console.log('found customer by id');
    console.log(util.inspect(customer, true));
});

Customer.findOne({ name: 'Andrew Keig' }, function (err, doc) {
    if (err) {
        console.log('Error finding customer by name');
        return false;
    }
    if (doc == null) {
        console.log('Cannot find customer by name');
        return false;
    }
    console.log('found customer by name');
    console.log(util.inspect(doc, true));
});

