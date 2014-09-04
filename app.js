var http = require('http');
var url = require('url');
var exec = require('child_process').exec;

var config = {
	port: 3737,
	allowedUsers: ['ACIDGHOST']
};

http.createServer(function(req, res) {

	var user = url.parse(req.url, true).query.username;
	console.log("YO from", user);
	
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

}).listen(config.port, function() {
	console.log('Listening on port ' + config.port + '...');
});
