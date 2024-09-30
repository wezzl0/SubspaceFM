import { changeColorDouble } from './themeswitcher';

export const socket = io.connect('https://subspacefm.xyz', { resource: '/chat' });

module.exports = {
    socket: socket,
};

const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

var sessionid;

socket.on('getSession', data => {
    sessionid = data.sessionid;
    name = data.name;
})

socket.on('user-connected', data => {
    var date = new Date(data.date);
    date.toLocaleDateString();
    appendSystemMessage(`<${date.toLocaleString()}> Welcome ${data.name}`)
})

socket.on('chat-message', data => {
    var date = new Date(data.date);
    appendMessage(`<${date.toLocaleString()}> ${data.name}: ${data.message}`)
})

socket.on('error-message', data => {
    appendSystemMessage(`${data.message}`)
})

socket.on('user-name-change', data => {
    var date = new Date(data.date);
    appendSystemMessage(`<${date.toLocaleString()}> ${data.oldname} changed name to ${data.name}.`)
    name = data.name;
})

socket.on('user-disconnected', name => {
    var date = new Date(data.date);
    appendMessage(`<${date.toLocaleString()}> ${name} disconnected`)
})
socket.on('help', data => {
    appendSystemMessage(`${data.message}`)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    if (messageInput.value[0] == '' || messageInput.value[0] == ' ' || messageInput.value[0] == undefined)
        return;
    //Commands
    if (messageInput.value[0] == '!') {
        var str = messageInput.value + ' ';
        var i = str.search(' ')
        var cmd = str.substring(1, i)
        var argument = str.substring(i + 1, str.length);
        outgoing = {
            sessionid: sessionid,
            cmd: cmd,
            args: argument
        }

        socket.emit('command', outgoing);
        messageInput.value = ''

        return;
    }

    var outgoing = {
        sessionid: sessionid,
        message: messageInput.value
    }
    var event = new Date();
    appendMessage(`<${event.toLocaleString()}> (${name}) You: ${outgoing.message}`)

    socket.emit('send-chat-message', outgoing)
    messageInput.value = ''
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerHTML = '<img src="dist/images/2_small_baby.png" class="baby" id="baby"/>' + new Option(message).innerHTML
    changeColorDouble(messageElement.firstChild);
    messageContainer.append(messageElement)
    $("#message-container").scrollTop($("#message-container")[0].scrollHeight);

}

function appendSystemMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerHTML = '<img src="dist/images/2_mac_speech.png" class="sys" id="sys"/>' + new Option(message).innerHTML
    changeColorDouble(messageElement.firstChild);
    messageContainer.append(messageElement)
    $("#message-container").scrollTop($("#message-container")[0].scrollHeight);

}

$("#login-button").click(function () {
    var outgoing = {
        username: $("#username-input").val(),
        cmd: "login",
        password: $("#password-input").val()
    }

    if (outgoing.username === "") {
        $('#username-input').css("background-color", "#bd5f5f");
    }
    else if (outgoing.password === "") {
        $('#password-input').css("background-color", "#bd5f5f");
    }
    else {
        socket.emit('login', outgoing);
        $("#login").trigger("click");
    }
});