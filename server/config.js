const env = process.env.NODE_ENV || 'development';

const sharedSecret = 'superSecretGoesHere';

const development = {
  env,
  app: {
    port: 3000,
    allowOrigin: 'http://localhost:8080',
  },
  auth: {
    jwtSecret: sharedSecret,
  },
  db: {
  },
};

const production = {
  env,
  app: {
    port: 3001,
    allowOrigin: 'https://example.com',
  },
  auth: {
    jwtSecret: sharedSecret,
  },
  db: {},
};

const config = { development, production };

module.exports = config[env];
