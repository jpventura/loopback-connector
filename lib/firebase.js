'use strict';

var _ = require('lodash');
var Connector = require('./connector');

function FirebaseConnector() {
  Connector.apply(this, [].slice.call(arguments));
}

FirebaseConnector.prototype = _.assignIn(Connector.prototype, {
  constructor: FirebaseConnector
});

module.exports = FirebaseConnector;
