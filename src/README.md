Permission

Describes the scope of the action. For instance the permission is "/orders/ GET". It does not describe if it is allowed or not, but it is a static action.
Permissions shall be seed for now, as they are describing what framework can support.

Policy

Describes what can be done with the permission. For instance, permission "/orders GET" can be DENY or ALLOW. Policy tells what do to with the static action.
Policy itself shall be defined when Role is being defined. Probably there is no sense to create policies and then start assigning policies to role. There can be policies which will be duplicated.
Policies might be cascaded deleted if role is being deleted.

Role

Role contains many policies - so for instance:

"DENY "/orders GET"
"ALLOW "/order POST"
"ALLOW "/products GET"

etc.

Member

Member can be assinged to Role. Member 


Consdier for phase 1:
4) Put warning that it is danger to play with other Medusa APIs which are not built-in permissions
5) Ability to create a permission with API path
6) Put information that Unassigned means Admin - what I can do with this?

Future:
1) Policies can be conditional in the future (e.g. checking if products are created by me) - can be useful in Marketplace
2) Teams
3) Patch Admin UI


Done:
1) Assignment user to roles which have the same policies - what precedence? - LOL user can have only one role now
2) Loading policies from another role to edit them when create new role
3) Loading policies from another role to edit them when create new role
  - shall I cover all built-in roles with "allow" when creating a role? Yes - all built-in permissions need to be visible and user can switch between DENY/ALLOW (future CONDITION)
4) Split permission for built-in (cannot be deleted) and custom ones

7) Add "most popular" roles to role card, so to see how many users are assigned to the particular roles
