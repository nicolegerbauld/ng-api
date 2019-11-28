'use strict';

const loggerFactory = require('bunyan-logger-factory');

module.exports = app => {
  app.lib = app.lib || {};

  app.logger = app.lib.logger = loggerFactory.init({
    logName: app.get('logName'),
    logStream: app.get('logStream'),
    logHost: app.get('syslogHost'),
    logPort: app.get('syslogPort'),
    logProto: app.get('syslogProto')
  });
};
