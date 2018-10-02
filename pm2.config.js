// # services.config.js

const SITE_PORT = 4567;

module.exports = {
  apps : [
    {
      name: `demokits-${SITE_PORT}`,
      script: 'npm',
      args: 'start',
      env: {
        PORT: SITE_PORT
      }
    },
  ],
};
