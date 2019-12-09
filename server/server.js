const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const routes = require('./index.route')
let Basic = require('./schemas/basic.schema');

app.use(cors());
app.use(bodyParser.json());

const basicRoutes = express.Router();
app.use('/basic', basicRoutes);
app.use('/api', routes)

////////////////////////////////////////////////////////
basicRoutes.route('/').get(function(req, res) {
    console.log('here2')
    Basic.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});
basicRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Basic.findById(id, function(err, basic) {
        res.json(basic);
    });
});
basicRoutes.route('/update/:id').post(function(req, res) {
    console.log('here...')
    Basic.findById(req.params.id, function(err, basic) {
        if (!basic)
            res.status(404).send("data is not found");
        else
        basic.basic_name = req.body.basic_name;
        basic.basic_description = req.body.basic_description;
        basic.basic_number = req.body.basic_number;
        basic.basic_completed = req.body.basic_completed;
        basic.save().then(basic => {
                res.json('basic updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
basicRoutes.route('/add').post(function(req, res) {
    let basic = new Basic(req.body);
    basic.save()
        .then(basic => {
            res.status(200).json({'basic': 'basic added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new basic failed');
        });
});
////////////////////////////////////////////////////////



mongoose.connect('mongodb://127.0.0.1:27017/basic', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});