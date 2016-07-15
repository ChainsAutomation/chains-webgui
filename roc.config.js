module.exports = {
  settings: {
    runtime: {
      applicationName: 'Chains',
      port: 3000,
      serve: ['public', 'build/client'],
        favicon: 'favicon.png',
        link: [
            {
                "rel": "icon",
                "href": "favicon.png"
            },
            {
                "rel": "stylesheet",
                "href": "react-toggle.css",
                "type": "text/css"
            },
            {
                "rel": "stylesheet",
                "href": "//fonts.googleapis.com/icon?family=Material+Icons",
                "type": "text/css"
            }
        ]
    },
    build: {
      reducers: 'src/redux/reducers.js',
      routes: 'src/routes/index.js',
    },
  },
};
