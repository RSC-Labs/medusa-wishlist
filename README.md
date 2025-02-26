# Medusa Wishlist

## What is it?

Medusa Wishlist provides functionality which stores wishlist items in a list, which can be then shared with others.

## Installation


1. Install plugin by adding to your `package.json`:

```json
...
"@rsc-labs/medusa-wishlist": "0.0.3" // or other available version
...
```
and execute install, e.g. `yarn install`.

2. Add plugin to your `medusa-config.js`:

```js
...
plugins: [
    {
      resolve: "@rsc-labs/medusa-wishlist",
      options: {}
    }
]
...
```
or
```js
...
plugins: ["@rsc-labs/medusa-wishlist"]
...
```

### Database migration

Medusa Wishlist introduces new models in database. To have it working, you need to firstly execute migrations:
```bash
npx medusa db:migrate
```

### Copy the code

You can copy the code from /src into your Medusa project.

Add module to `medusa-config.js`:

```js
  {
    resolve: "./modules/wishlist",
  }
```

Update your `package.json`: 

```json
"dependencies": {
  ...
  "jsonwebtoken": "^9.0.2"
}
```

### Database migration

Medusa Wishlist introduces new models in database. To have it working, you need to firstly execute migrations:
```bash
npx medusa db:migrate
```

## Overview

Everything is covered by the API definition - details are here: [Store API](./docs/api.yaml).

In short - every customer has wishlist entity created automatically when first item is being added.
Items can added, updated (e.g. by quantity) or deleted.
Wishlist can be shared by using token.

## Configuration

### Update JWT secret

Sharing functionality uses JWT to generate a token. To have it properly working, you shall set `jwtSecret` in options, e.g.:
```js
  {
    resolve: "@rsc-labs/medusa-wishlist",
    options: {
      jwtSecret: 'supersecret'
    }
  }
```
