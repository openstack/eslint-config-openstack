describe("Unit: eslint-config-openstack", function () {

  it("should set espree as the default parser.", function () {

    var config = require('../index');
    expect(config.parser).toEqual('espree');
  });

  it("should disable all ecma6 features.", function () {
    var config = require('../index');

    var keys = Object.keys(config.ecmaFeatures);

    keys.forEach(function (key) {
      expect(config.ecmaFeatures[key]).toBeFalsy();
    });
  });

  it("should disable all environments.", function () {
    var config = require('../index');
    expect(config.env).toBeFalsy();
  });
});
