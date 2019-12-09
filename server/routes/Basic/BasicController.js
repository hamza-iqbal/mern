var BasicModel = require('../../schemas/basic.schema')
//var bcrypt = require('bcrypt')
//const config = require('../../config/config')
// const jwt = require('jsonwebtoken')
// var crypto = require('crypto-random-string')
// const nodemailer = require('nodemailer')
// const { validationResult } = require('express-validator/check')
// const stripe = require("stripe")(config.stripeKey);
// const JobModel = require('../Job/JobModel.js')
// var api_key = config.mailgunAPIKey;
// var domain = config.mailgunDomain;
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
module.exports = {

    list: function(req,res){
        console.log('here man!')
        BasicModel.find(function(err, Basic) {
            if (err) {
              return res.status(500).json({
                message: 'Error when getting List.',
                err: err
              })
            }
            return res.status(200).json({
                error: false,
                Basic
            })
          })
    },
    show: function(req,res){
        var id = req.params.id
        BasicModel.findOne({ _id: id }, function(err, Basic) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Document.',
                    err:err,
                    error: true
                })
            }
            if (!Basic) {
                return res.status(404).json({
                    message: 'No such thing.'
                })
            }
            return res.status(200).json({
                error: false,
                Basic
            })
        })
    },
    add: function(req,res){
        var Basic = new BasicModel({
            basic_description: req.body.basic_description,
            basic_name: req.body.basic_name,
            basic_number: req.body.basic_number,
            basic_completed: req.body.basic_completed
        })
        Basic.save(function(err, Basic) {
            if (err) {
              return res.status(500).json({
                err,
                error: true
              })
            }
            return res.status(200).json({
                message: 'You successfully created a basic item.',
                error: false,
                Basic
            })
        })
    },
    update: function(req,res){
        var id = req.params.id
        BasicModel.findOne({ _id: id }, function(err, Basic) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Document.',
                    err:err,
                    error: true
                })
            }
            if (!Basic) {
                return res.status(404).json({
                    message: 'No such thing.'
                })
            }
            Basic.basic_name = req.body.basic_name ? req.body.basic_name : Basic.basic_name
            Basic.basic_description = req.body.basic_description ? req.body.basic_description : Basic.basic_description
            Basic.basic_number = req.body.basic_number ? req.body.basic_number : Basic.basic_number
            Basic.basic_completed = req.body.basic_completed ? req.body.basic_completed : Basic.basic_completed
            Basic.save(function(err, basic) {
                if (err) {
                  return res.status(500).json({
                    message: 'Error when updating basic.',
                    error: true,
                    err
                  })
                }
        
                return res.status(201).json({
                  message: 'Successfully updated.',
                  basic,
                  error:false
                })
              })
        })
    },

}