var http = require('http');
var url = require('url');
var exec = require('child_process').exec;

var config = {
	hostname: 'YOUR_SECRET_HOST',
	port: 0,
	secret: 'YOUR_YO_SECRET',
	allowedUsers: ['ACIDGHOST']
};

try {
	var configLocal = require('./config');
	Object.keys(config).forEach(function(k) {
		if(configLocal.hasOwnProperty(k)) {
			config[k] = configLocal[k];
		}
	});
	console.log('Configurations:', config);
} catch(e) {}

http.createServer(function(req, res) {

	var urlParts = url.parse(req.url, true);
	var user = urlParts.query.username;

	if(user != undefined) {
		console.log("YO from", user, req.connection.remoteAddress);

		var checkHost = (req.headers.host === config.hostname+':'+config.port);
		var checkPathname = (urlParts.pathname === '/'+config.secret);
		if(checkHost && checkPathname) {
			for(var i=0; i<config.allowedUsers.length; i++) {
				if (config.allowedUsers[i] === user) {
					setTimeout(function() {
						exec("killall chrome", function (error, stdout, stderr) {
							console.log("Killing Chrome...");
						});
					}, 50000);
					exec("shutdown -h +1", function (error, stdout, stderr) {
						console.log("Shutdown...");
					});
					break;
				}
			}
		} else {
			console.log('Unauthorized access!\n', req.headers, '\n', urlParts);
		}
	}

}).listen(config.port, function() {
	console.log('\nListening on http://' + config.hostname + ':' + config.port + '...');
});
