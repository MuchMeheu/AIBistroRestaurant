document.getElementById('user-input-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var userInput = document.getElementById('user-input').value;
    var chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += '<p>You: ' + userInput + '</p>';

    // Send a request to your server-side application
    fetch('/get-response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        chatbox.innerHTML += '<p>AI: ' + data.response + '</p>';
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    document.getElementById('user-input').value = '';
});