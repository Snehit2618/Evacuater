// Script for AwareBridge

// Toggle Chatbot Window
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
  }
  
  // Send a message to the Chatbot
  function sendChatbotMessage() {
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');
  
    if (input.value.trim() === '') return;
  
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = input.value;
    messages.appendChild(userMessage);
  
    // Simulate bot response
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.textContent = "Thanks for your message! I'll get back to you soon.";
    messages.appendChild(botMessage);
  
    // Clear input field
    input.value = '';
  
    // Scroll to the latest message
    messages.scrollTop = messages.scrollHeight;
  }
  
  // Fetch Localized Guidelines
  const locationForm = document.getElementById('location-form');
  locationForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const locationInput = document.getElementById('location');
    const guidelinesOutput = document.getElementById('guidelines-output');
  
    const userLocation = locationInput.value.trim();
    if (userLocation === '') {
      guidelinesOutput.textContent = 'Please enter a valid location.';
      return;
    }
  
    // Simulate fetching guidelines for the entered location
    guidelinesOutput.textContent = `Fetching guidelines for ${userLocation}...`;
    setTimeout(() => {
      guidelinesOutput.textContent = `Localized guidelines for ${userLocation}:
      - Stay informed about local risks.
      - Keep an emergency kit ready.
      - Follow evacuation protocols.`;
    }, 1500);
  });
  
  // View Resource
  function viewResource(resourceType) {
    alert(`You selected ${resourceType}. Redirecting to detailed content...`);
  }
  
  // Start Quiz
  function startQuiz() {
    alert('Quiz starting soon! Stay tuned for interactive questions.');
  }
  