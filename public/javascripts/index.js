
let socket = io();
let username;

var clients = 0;

function init() {
    socket.on('UpdateClientNo', number => {
        updateClientNo(number)
        if (!username) {
            username = 'user' + number;
            updateIntro(username)
        }
    }
    );

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            updateLocation(position)
        })
    } else {
        console.log("Something wrong with geolocation")
    }

    socket.on('chat', (chatText) => {
        writeOnHistory(chatText)
    })
}

function updateIntro(name) {
    document.getElementById('intro').innerText = 'Welcome ' + name;
}

function updateLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById('locationText').innerText = 'Latitude: ' + latitude + ' Longitude: ' + longitude;
}

function updateClientNo(number) {
    console.log('update client no ' + number)
    document.getElementById('clientNo').innerText = number + ' users connected';
}

function sendChatText() {
    let chatText = document.getElementById('chat_input').value;
    socket.emit('chat', chatText)
}

/**
 * it appends the given html text to the history div
 * @param text: the text to append
 */
function writeOnHistory(text) {
    let history = document.getElementById('history');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = username + ': ' + text;
    history.appendChild(paragraph);
    document.getElementById('chat_input').value = '';
}