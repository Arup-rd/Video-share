const path = require('path');

module.exports = {
  paths: {
    app: {
      client: path.resolve(__dirname, '../src/client'),
      api: path.resolve(__dirname, '../src/server/app'),
      server: path.resolve(__dirname, '../src/server/core')
    },
    dist: {
      server: path.resolve(__dirname, '../dist'),
      client: path.resolve(__dirname, '../dist/client')
    },
    static: path.resolve(__dirname, '../static')
  },
  server: {
    port: 3000,
    compress: false
  },
  db: {
		host: 'localhost',
		dbName: 'kibita',
		debug: false,
		options: {
			userName: false,
			passWord: false,
			port: 27017
		}
	},
	secret: [
    'yoursecretkey'
  ],
  file: {
    size: '200mb'
  }
};
