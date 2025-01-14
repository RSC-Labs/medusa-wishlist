# Medusa Wishlist

## What is it?

Medusa Wishlist provides functionality which stores wishlist items in a list, which can be then shared with others.

## Installation

### Plugin system

Plugins are not yet supported in Medusa 2.0, so this part is TODO.

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
    resolve: "./modules/wishlist",
    options: {
      jwtSecret: 'supersecret'
    }
  }
```
