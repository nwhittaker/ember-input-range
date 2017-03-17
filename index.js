/* eslint-env node */
'use strict';

module.exports = {
  included: function(app) {
    app.import('addon/styles/input-range.css');
  },
  name: 'input-range'
};
