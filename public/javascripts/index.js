

let username;

var clients = 0;

// Initialize Channels client
let pusher = new Pusher('16489bfebf2112e5b975', {
    cluster: 'eu',
});

// Subscribe to the appropriate channel
let channel = pusher.subscribe('my-channel');

// Bind a callback function to an event within the subscribed channel
// channel.bind("pusher:member_added", function (member) {
//     console.log("user connected")
//     clients++;
//     updateClientNo(clients)
// });

// channel.bind("pusher:member_removed", function(){
//     console.log("user diconnected");
//     clients--;
//     updateClientNo(clients);
// })

channel.bind("pusher:subscription_count", (data) => {
    console.log(data.subscription_count);
    updateClientNo(data.subscription_count)
})



// async function pushData(data) {
//     const res = await fetch('/api/channels-event', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });
//     if (!res.ok) {
//         console.error('failed to push data');
//     }
// }



function init() {


    // socket.on('UpdateClientNo', number => {
    //     updateClientNo(number)
    //     if (!username) {
    //         username = 'user' + number;
    //         updateIntro(username)
    //     }
    // }
    // );

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         updateLocation(position)
    //     })
    // } else {
    //     console.log("Something wrong with geolocation")
    // }

    // socket.on('chat', (chatText) => {
    //     writeOnHistory(chatText)
    // })
}

// function updateIntro(name) {
//     document.getElementById('intro').innerText = 'Welcome ' + name;
// }

// function updateLocation(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     document.getElementById('locationText').innerText = 'Your Latitude: ' + latitude + ' Longitude: ' + longitude;
// }

function updateClientNo(number) {
    document.getElementById('clientNo').innerText = number + ' users connected';
}

// function sendChatText() {
//     let chatText = document.getElementById('chat_input').value;
//     socket.emit('chat', chatText)
// }

/**
 * it appends the given html text to the history div
 * @param text: the text to append
 */
// function writeOnHistory(text) {
//     let history = document.getElementById('history');
//     let paragraph = document.createElement('p');
//     paragraph.innerHTML = username + ': ' + text;
//     history.appendChild(paragraph);
//     document.getElementById('chat_input').value = '';
// }