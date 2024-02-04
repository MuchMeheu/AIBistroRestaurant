document.getElementById('user-input-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const userInput = document.getElementById('user-input').value;
  
    fetch('/get-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: userInput })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('ai-response').innerText = data.response;
    })
    .catch(error => console.error('Error:', error));
  });