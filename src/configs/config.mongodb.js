"use strict";

// level 0

// const config = {
//     app: {
//         port: 3000
//     },

//     db: {
//         host: 'localhost',
//         port:27017,
//         name: 'eCommerce'
//     }
// }

//level 1

// const dev = {
//     app: {
//         port: 3000
//     },

//     db: {
//         host: 'localhost',
//         port:27017,
//         name: 'eCommerceDev'
//     }
// }

// const product = {
//     app: {
//         port: 3000
//     },

//     db: {
//         host: 'localhost',
//         port:27017,
//         name: 'eCommerce'
//     }
// }

// level 3

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3000,
  },

  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || "eCommerceDev",
  },
};

const product = {
  app: {
    port: process.env.PRO_APP_PORT || 3000,
  },

  db: {
    host: process.env.PRO_DB_HOST || "localhost",
    port: process.env.PRO_DB_PORT || 27017,
    name: process.env.PRO_DB_NAME || "eCommerce",
  },
};

const config = { dev, product };
const env = process.env.NODE_ENV || "dev";

console.log(config[env], env);

module.exports = config[env];
