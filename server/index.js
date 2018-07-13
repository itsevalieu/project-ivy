const PORT = 8080;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.listen(PORT, function() {
	console.log('Server started on port', PORT);
});
