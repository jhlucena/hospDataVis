(function () {

    'use strict';

    var hospitalController = require('./controllers/hospital');

    var Route = function(){};

    Route.prototype.configure = function(app) {

        // Get all hospitals
        app.get('/api/hospitals', hospitalController.getHospitals );

        // Get hospitals bounded to a location
        app.post('/api/hospitals', hospitalController.getBoundedHospitals );

    };

    module.exports = new Route();

})();