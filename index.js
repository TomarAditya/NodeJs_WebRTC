var Peer = require('simple-peer');
var peer = new Peer({

initiator: location.hash === '#init',
trickle: false

});

peer.on('error', function (err) { console.log('error', err) })

peer.on('signal', function(data){

document.getElementById('yourId').value = JSON.stringify(data);

});

document.getElementById('connect').addEventListener('click' , function(){

var otherId = JSON.parse(document.getElementById('otherId').value);
peer.signal(otherId);

});

document.getElementById('send').addEventListener('click', function (){

var yourMessage = document.getElementById('yourMessage').value;
peer.send(yourMessage);

})

peer.on('data',function (data){

document.getElementById('messages').textContent += data + '\n';

});


// var port = process.env.PORT || 8080

// app.listen(port ,function(){
// 	console.log("App Running");
// });
