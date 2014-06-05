(function () {

    'use strict';

    var Hospital = require('../models/hospital');

    var HospitalController = function () {
    };


    // Return all hospitals
    HospitalController.prototype.getHospitals = function (req, res) {

        Hospital.find().exec(function (err, hospitals) {
            if (err) {
                res.send(500, err);
            }
            else {
                res.json(hospitals);
            }
        });

    };

    // Return hospitals boxed to lat/long received
    HospitalController.prototype.getBoundedHospitals = function (req, res) {

        console.log('Requested Location box:' + JSON.stringify(req.body.box));

        if (!req.body.box) {
            res.send(400, 'Bad Request');
        }
        else {

            var location = [
                [req.body.box[0][1], req.body.box[0][0]],
                [req.body.box[1][1], req.body.box[1][0]  ]
            ];
            Hospital.where({
                location: { $within: {$box: location}}
            }).exec(function (err, hospitals) {
                if (err) {
                    res.send(500, err);
                }
                else {
                    res.json(hospitals);
                }
            });
        }

    };


    module.exports = new HospitalController();

})();