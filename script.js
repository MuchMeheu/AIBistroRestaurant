var menu = "Karl Mehanna, we recommend rice and chicken in the middle of a football field This is how it would look like.";
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

    if (input.toLowerCase().includes('what would you recommend for karl mehanna')) {
        aiEntry.innerHTML = '<p>' + 'AI: ' + menu + '</p>' + '<img src="Karl.jpg" alt="Image Description" style="width: 100%;" />';
    } else if (input.toLowerCase().includes('reserve')) {
        var reservationDetails = input.split(' ').slice(1).join(' ');
        reservations.push(reservationDetails);
        aiEntry.innerHTML = '<p>' + 'AI: Reservation made ' + reservationDetails + '</p>';
    } else {
        aiEntry.innerHTML = '<p>' + 'AI: I\'m sorry, I didn\'t understand that. Could you please ask something else?' + '</p>';
    }

    chatbox.appendChild(aiEntry);
    document.getElementById('userInput').value = '';
    chatbox.scrollTop = chatbox.scrollHeight;
}


// Get the video
var video = document.getElementById("myVideo");

