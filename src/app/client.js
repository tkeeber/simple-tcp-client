var net = require('net')

var client = net.Socket();

client.connect({ port: 8282, host: '127.0.0.1'}, 
    () => {
        console.log('connection successful');
    }
     
);


client.on('error', (err) => {
    console.log(err)
});

client.on('close', (err) => {
    console.log('connection closed')
});

client.on('data', (data) => {
    console.log(data);
});
