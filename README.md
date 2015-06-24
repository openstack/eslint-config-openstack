# eslint-config-openstack

OpenStack has a set of style guidelines for clarity. OpenStack is a very large code base, spanning
dozens of git trees, with over a thousand developers contributing every 6 months. As such, common
style helps developers understand code in reviews, move between projects smoothly, and overall make
the code more maintainable.

Even though eslint permits overriding rules on a per-project basis, it should be the goal of every
project to stay as close to the common guidelines as possible.

## Installation

1. `npm install --save-dev eslint eslint-config-openstack`
2. Add `extends: "openstack"` to your `.eslintrc`

