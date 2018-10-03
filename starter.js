var restify = require('restify');
var builder = require('botbuilder');

// configure Restify framework server
var myServer = restify.createServer();
myServer.listen(process.env.port || process.env.PORT || 3979, function () {
    console.log('Bot Application is running at (%s)', myServer.url); 
});

// Create chat channel to communicate the Bot Service
var connectorChannel = new builder.ChatConnector({ appId: process.env.MICROSOFT_APP_ID, appPassword: process.env.MICROSOFT_APP_PASSWORD });

// Listen for messages from users 
myServer.post('/api/meteo_api', connectorChannel.listen());
// Load apples order form
var applesOrder = require('./meteoBuiler.js')(builder);
// Initialize bot with connector and array of tasks in apples order form
var bot = new builder.UniversalBot(connectorChannel, applesOrder.form);