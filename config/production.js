module.exports = {
  server: {
    port: 3090,
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
    size: '100mb'
  },
  "grant": {
    "server": {
      "host": "codends.net"
    }
  }
};
