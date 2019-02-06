const app = require('express')();

/*
Assign static Webserver and Assets
*/
app.use(require('express').static('public'));
app.use('/assets', require('express').static('src/assets'));

/*
Listening to port socket
*/
app.listen(3000);
console.log('Webserver is listening to port 3000');