.. _contributing:

=======================================
Contributing to eslint-config-openstack
=======================================

If you're interested in contributing to the eslint-config-openstack
project, the following will help get you started.

Contributor License Agreement
-----------------------------

In order to contribute to the project, you need to have
signed OpenStack's contributor's agreement.

.. seealso::

   * http://docs.openstack.org/infra/manual/developers.html
   * http://wiki.openstack.org/CLA

LaunchPad Project
-----------------

Most of the tools used for OpenStack depend on a launchpad.net ID for
authentication.

.. seealso::

   * https://launchpad.net
   * https://launchpad.net/eslint-config-openstack

Project Hosting Details
-------------------------

Mailing list (prefix subjects with ``[eslint-config-openstack]`` for faster responses)
    http://lists.openstack.org/cgi-bin/mailman/listinfo/openstack-discuss

Code Hosting
    https://github.com/openstack/eslint-config-openstack

Code Review
    https://review.openstack.org/#/q/status:open+project:openstack/eslint-config-openstack,n,z

Rules only land with consensus
------------------------------

Patches that activate, deactivate, or modify rules, should only be merged if a consensus of
reviewers is reached. In this case, consensus means at least five positive votes (+1 or +2),
with no -1 votes. Cores may not override and/or ignore -1 votes.

Library upgrades require two cores
----------------------------------

Patches that upgrade eslint only require two core approvers to land. These patches must add new
upstream rules in a deactivated state, and delete any deprecated rules.

Policy upgrades require all cores
---------------------------------

Updates to policies and governance on this project require +2 votes from all direct cores on the
project. Core votes from the parent OpenStack QA project are optional.

Patches should be abandoned after a month of inactivity
-------------------------------------------------------

Cores should attempt to keep the list of extant patches small and managable. As such, they should
talk to any author whose patch has failed to garner the necessary support, and has experienced
one month of inactivity. Reasonable notice should be given to the author before a patch is
abandoned.

