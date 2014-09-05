YO, shutdown PC!
==============

You're in bed and your PC is still on? YO him to shutdown! :)

#Installation
First you have to have node.js installed on your machine. Then you should be able to create a dynamic DNS entry (I used [no-ip.com](http://www.no-ip.com)) and configure your network; to do so setup the NAT configuration (or port forwarding, whatever) on your gateway so that your PC is accessible from the Internet on a certain port.
Now you have to request for API access on [YO](http://dev.justyo.co) and create and API account with the nickname you prefer (I've chosen GOODNIGHT-ACIDGHOST and no, you can't YO that to shutdown my PC.. This little app has a little check on the user YOing :D) and as callback link the one created with the dynamic DNS (don't forget the port!).

Every time someone YO this API account, YO will send a `GET` request the link associated with that account along with a query parameter `username` which is the one who YOed you.

#Starting up
This app has no dependencies, so you have to just type `sudo node app.js` to start the server and then YO him from the bed to shut your PC down for bedtime :) 
