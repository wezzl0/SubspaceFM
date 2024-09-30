const io = require("socket.io")(3000);
const crypto = require('crypto');
const users = [];
var messages = [];

var getSessionid = function () {
    // 16 bytes is likely to be more than enough,
    // but you may tweak it to your needs
    return crypto.randomBytes(16).toString('base64');
};

function getUserName(username) {
    if (username == undefined) {
        username = 'Guest' + Math.floor(Math.random() * 10000);
    }
    users.forEach(element => {
        if (element.name === username) {
            username = getUserName(username);
        }
    });
    return username;
}

// New user is for giving session ids to users without passwords.
function newUser(socket) {
    var sessionid = getSessionid();
    var name = getUserName();
    var user = {
        name: name,
        sessionid: sessionid,
        ip: socket.handshake.address,
        pwhash: '',
        ttl: 30 //minutes
    }
    return user;
}

// New user is for giving session ids to users without passwords.
io.on('connection', socket => {
    socket.on('newUser', incoming => {
        //isBanned(socket);
        var user = newUser(socket);

        if (user == undefined)//ERROR THAT IS UNLIKELY
            return;

        users.push(user);
        console.log("NEW USER CONNECTED: " + user.name + " " + user.ip);
        socket.emit('getSession', { name: user.name, sessionid: user.sessionid });
        messages.forEach(element => {
            socket.emit('chat-message', { date: element.date, message: element.message, name: element.name });
            console.log('chat-message', { date: element.date, message: element.message, name: element.name });
        });
        socket.emit('help', { message: "Type !help for available commands." })

        socket.broadcast.emit('user-connected', { date: new Date(), name: user.name });
        console.log('user-connected', { name: user.name });
    });

    //when the database is added
    /*socket.on('claim-user', request => {
    
    })*/

    socket.on('command', incoming => {
        var user = users.find(({ sessionid }) => sessionid === incoming.sessionid);
        if (user == undefined) {
            socket.emit('error-message', { message: 'ERROR: Invalid or expired sessionid, refresh to chat.' });
            return;
        }
        user.ttl = 30;
        console.log("COMMAND ISSUED " + incoming.cmd + '.');
        if (incoming.cmd === 'changename') {
            var oldname = user.name;
            // see if user is currently logged in
            if (incoming.args != undefined) {
                var user2 = users.find(({ name }) => name === incoming.args);
                //TODO Database lookup for existing user
                if (user2 != undefined) {//ERROR
                    var address = socket.handshake.address;
                    console.log('Connection from ' + address.address + ' tried using name ' + incoming.args);
                    socket.emit('error-message', { message: 'ERROR: User name already taken' });
                    return;
                }
            }
            else {//ERROR
                //console.log('New connection from ' + address.address +  ' tried using name ' + incoming.name);
                socket.emit('error-message', { message: 'ERROR: No name specified' });
                return;
            }
            var i = users.indexOf(user);
            users[i].name = incoming.args;
            console.log('User ' + oldname + 'changed name to ' + incoming.args);
            socket.emit('user-name-change', { date: new Date(), oldname: oldname, name: incoming.args });
            socket.broadcast.emit('user-name-change', { date: new Date(), oldname: oldname, name: incoming.args });
            return
        }
        if (incoming.cmd === 'help') {
            socket.emit('help', { message: "Available commands: !changename <name>." })
            return
        }
    });

    socket.on('send-chat-message', incoming => {
        var user = users.find(({ sessionid }) => sessionid === incoming.sessionid);
        if (user == undefined) {
            var user = newUser(incoming);

            console.log("NEW USER CONNECTED: " + user.name);
            socket.emit('getSession', { name: user.name, sessionid: user.sessionid });
        }

        user.ttl = 30;
        var date = new Date();
        console.log(date + " " + user.name + " SAID: " + incoming.message);
        socket.broadcast.emit('chat-message', { date: date, message: incoming.message, name: user.name });
        messages.push({ message: incoming.message, name: user.name, date: date })

        if (messages.length > 50) {
            messages.shift();
        }
    });

    socket.on('disconnect', incoming => {
        var user = users.find(({ sessionid }) => sessionid === incoming.sessionid);
        if (user == undefined) {
            socket.emit('error-message', { date: new Date(), message: 'ERROR: Invalid or expired sessionid, refresh to chat.' });
            return;
        }
        console.log("DISCONNECTED " + user.name);
        socket.broadcast.emit('user-disconnected', user.name);
        var i = users.findIndex(user);
        users.splice(i, i);
    });
});