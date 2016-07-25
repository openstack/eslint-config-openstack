/*
 * Copyright (c) 2015 Hewlett-Packard Development Company, L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/**
 * This is a helper module used to load and export YAML-based ESLint config
 */

var yaml = require('js-yaml');
var fs = require('fs');
var path = require('path');

module.exports = function(filename) {
  'use strict';

  var rcPath = path.join(__dirname, filename);
  var fileContent = fs.readFileSync(rcPath); // eslint-disable-line no-sync
  return yaml.safeLoad(fileContent);
};
