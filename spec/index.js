describe("Unit: eslint-config-openstack", function() {
  "use strict";

  it("should set espree as the default parser.", function() {
    var config = require('../index');
    expect(config.parser).toEqual('espree');
  });

  it("should disable all environments.", function() {
    var config = require('../index');
    expect(config.env).toBeFalsy();
  });

  it("should alert on rule replacements.", function() {
    var eslintReplacements = require('eslint/conf/replacements.json');
    var rules = require('../index').rules;

    /*eslint-disable guard-for-in */
    for (var ruleName in eslintReplacements) {
      expect(rules.hasOwnProperty(ruleName))
        .toBeFalsy("Rule " + ruleName + " has been replaced:", eslintReplacements[ruleName]);
    }
    /*eslint-enable guard-for-in */
  });

  it("should have an opinion on every eslint default rule.", function() {
    var eslintDefaults = require('eslint/conf/eslint.json');
    var rules = require('../index').rules;

    /*eslint-disable guard-for-in */
    for (var ruleName in eslintDefaults.rules) {
      expect(rules.hasOwnProperty(ruleName))
        .toBeTruthy("Rule " + ruleName + " must be defined.");
    }
    /*eslint-enable guard-for-in */
  });

  it("should only have opinions on rules that exist (no zombies).", function() {
    var eslintRules = require('eslint/conf/eslint.json').rules;
    var openstackRules = require('../index').rules;

    /*eslint-disable guard-for-in */
    for (var ruleName in openstackRules) {
      expect(eslintRules.hasOwnProperty(ruleName))
        .toBeTruthy("Rule " + ruleName + " is a zombie.");
    }
    /*eslint-enable guard-for-in */
  });
});
