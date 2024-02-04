document.getElementById('user-input-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var userInput = document.getElementById('user-input').value;
    var chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += '<p>You: ' + userInput + '</p>';
    chatbox.innerHTML += '<p>AI: ' + 'Sure, here is the menu...' + '</p>'; // Replace this with actual AI response
    document.getElementById('user-input').value = '';
});