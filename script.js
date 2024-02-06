var menu = "Our menu includes: Pasta, Pizza, Salad, and Desserts.";
var reservations = [];

function getReply() {
    var input = document.getElementById('userInput').value;
    var chatbox = document.getElementById('chatbox');
    var userEntry = document.createElement('div');
    userEntry.className = 'chat-entry user-entry';
    userEntry.innerHTML = '<p>' + 'You: ' + input + '</p>';
    chatbox.appendChild(userEntry);

    var aiEntry = document.createElement('div');
    aiEntry.className = 'chat-entry ai-entry';

    if (input.toLowerCase().includes('menu')) {
        aiEntry.innerHTML = '<p>' + 'AI: ' + menu + '</p>';
    } else if (input.toLowerCase().includes('reserve')) {
        var reservationDetails = input.split(' ').slice(1).join(' ');
        reservations.push(reservationDetails);
        aiEntry.innerHTML = '<p>' + 'AI: Reservation made for ' + reservationDetails + '</p>';
    } else {
        aiEntry.innerHTML = '<p>' + 'AI: I\'m sorry, I didn\'t understand that. Could you please ask something else?' + '</p>';
    }

    chatbox.appendChild(aiEntry);
    document.getElementById('userInput').value = '';
    chatbox.scrollTop = chatbox.scrollHeight;
}


// Get the video
var video = document.getElementById("myVideo");

