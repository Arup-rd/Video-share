module.exports = {
  server: {
    port: 3000,
    compress: false
  },
  db: {
		host: 'localhost',
		dbName: 'parole',
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
  },
  "grant": {
    "server": {
      "host": "localhost:3000"
    }
  }
};
