describe("Unit: eslint-config-openstack", function() {

  it("should set espree as the default parser.", function() {
    var config = require('../index');
    expect(config.parser).toEqual('espree');
  });

  it("should disable all ecma6 features.", function() {
    var config = require('../index');

    var keys = Object.keys(config.ecmaFeatures);

    keys.forEach(function(key) {
      expect(config.ecmaFeatures[key]).toBeFalsy();
    });
  });

  it("should disable all environments.", function() {
    var config = require('../index');
    expect(config.env).toBeFalsy();
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
