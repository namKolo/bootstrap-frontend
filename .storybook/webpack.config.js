const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.js(x)?$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ],
    include: '/Users/admin/Documents/AR/connect/frontend/react.revolution-v2/src/js/'
  });

  console.log(JSON.stringify(config.resolve, null, 2));
  config.resolve.modules = config.resolve.modules.concat([
    '/Users/admin/Documents/AR/connect/frontend/react.revolution-v2/src/js',
    '/Users/admin/Documents/AR/connect/frontend/react.revolution-v2/node_modules/'
  ]);

  // Return the altered config
  return config;
};
