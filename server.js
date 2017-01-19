var express = require('express');
var resolve = require('path').resolve;
var app = express();

app.use(express.static('public'));
app.get('/', (req, res, next) => {
	res.sendFile(resolve(__dirname, 'index.html'));
})

app.listen(process.env.PORT || '4000');



