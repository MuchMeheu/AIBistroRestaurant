var menu = "Karl Mehanna, we recommend rice and chicken in the middle of a football field This is how it would look like.";
var reservations = [];
var locationStr = "Silicon Valley, California, USA";
var explanation = "The AI Bistro is a restaurant that is run by an AI. It is a unique experience where you can interact with the AI to make reservations, ask for recommendations, and more. The AI Bistro is located in Silicon Valley, California, USA. The exact location is a secret, until the day prior to your reservation. The AI Bistro is open from 7:00 AM to 10:00 PM, Monday to Saturday. We look forward to seeing you at the AI Bistro!";
var price = "A meal a the AI bistro is paid through a subscription that costs 200 dollars per month"

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
        aiEntry.innerHTML = '<p>' + 'AI: Reservation made ' + reservationDetails + '.</p>';
    } else if (input.toLowerCase().includes('what is the location of the restaurant')) {
        aiEntry.innerHTML = '<p>' + 'AI: ' + locationStr + '. But the exact location is a secret, until the day prior to your reservation.' + '</p>';
    } else if (input.toLowerCase().includes('explain what is the restaurant')) {
        aiEntry.innerHTML = '<p>' + 'AI: ' + explanation + '</p>';
    } else if (input.toLowerCase().includes('what is the price of the meal')) {
        aiEntry.innerHTML = '<p>' + 'AI: ' + price + '</p>';
    } else {
        aiEntry.innerHTML = '<p>' + 'AI: I\'m sorry, I didn\'t understand that. Could you please ask something else?' + '</p>';
    }

    chatbox.appendChild(aiEntry);
    document.getElementById('userInput').value = '';
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Add event listener for Enter key
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevents the default action to be taken
        getReply();
    }
});


// Get the video
var video = document.getElementById("myVideo");

