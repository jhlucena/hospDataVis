(function () {
    'use strict';

    var mongoose = require('mongoose'),
    //loader = require('../data'),
        path = require('path'),
        fs = require('fs'),
        Schema = mongoose.Schema;

    var hospitalSchema = new Schema({
        name: {type: String, required: true},
        address: {
            type: {
                street: {type: String},
                city: {type: String},
                zip: { type: String }
            }
        },
        contactinfo: {
            type: {
                number: {type: String},
                fax: {type: String}
            }
        },
        location: {
            type: {
                lat: {type: Number, required: true},
                lng: {type: Number, required: true}
            },
            required: true,
            index: '2d'
        }
    });

    var loader = function (path, Schema) {
        fs.readFile(path, 'utf8', function (err, data) {
            var hospitals = JSON.parse(data);

            hospitals.forEach(function (hospital) {
                console.log('Hospital: ' + hospital);
                new Schema(hospital).save(function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            });
        });
    };

    var Hospital = mongoose.model('Hospital', hospitalSchema);

    Hospital.remove({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            loader(path.join(__dirname, '../data/hospital.json'), Hospital);
        }
    });

    module.exports = Hospital;
})
();
