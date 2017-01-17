import express from 'express'; // get express
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000; // define the port
const app = express(); // setup the instance of express
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true,
   publicPath: config.output.publicPath
})); 

app.get('/', function(request, response) {
   response.sendFile(path.join(__dirname, '../src/index.html'));
});

// listening to the port and add some handling
app.listen(port, function(err) {
   if (err) {
      console.log(err); // eslint-disable-line no-console
   }
   else {
      open('http://localhost:' + port);
   }
});