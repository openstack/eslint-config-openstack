# eslint-config-openstack

OpenStack has a set of style guidelines for clarity. OpenStack is a very large code base, spanning
dozens of git trees, with over a thousand developers contributing every 6 months. As such, common
style helps developers understand code in reviews, move between projects smoothly, and overall make
the code more maintainable.

Even though eslint permits overriding rules on a per-project basis, it should be the goal of every
project to stay as close to the common guidelines as possible.

## Installation
To add these rules to your project, follow these steps.

1. `npm install --save-dev eslint eslint-config-openstack`
2. Add `extends: "openstack"` to your `.eslintrc` yaml file

## Approval Policies

If you would like to contribute, please follow [OpenStack's contribution guidelines](https://wiki.openstack.org/wiki/How_To_Contribute).


#### Rules only land with consensus
Patches that activate, deactivate, or modify rules, should only be merged if a consensus of
reviewers is reached. In this case, consensus means at least five +1 votes, with no -1 votes. Cores 
may not override and/or ignore -1 votes.

#### Library upgrades require two cores
Patches that upgrade eslint only require two core approvers to land. These patches should add new
upstream rules in a deactivated state, and delete any deprecated rules.
