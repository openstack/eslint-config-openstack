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

/*eslint-disable strict*/
'use strict';
/*eslint-enable strict*/

/**
 * The default module for this package simply reads in the .eslintrc yaml file, and returns it
 * as a module.
 */

var yaml = require('js-yaml');
var fs = require('fs');
var path = require('path');

/*eslint-disable no-sync */
var rcPath = path.join(__dirname, '.eslintrc');
var fileContent = fs.readFileSync(rcPath);
/*eslint-enable no-sync */

module.exports = yaml.safeLoad(fileContent);
