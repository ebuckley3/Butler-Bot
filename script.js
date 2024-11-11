// Function to get the bot's response based on user input
function getResponse() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");

    // Default response if no match is found
    let response = "I'm here to help answer questions about gender studies. Try asking about gender theory, key figures, or feminism.";
    
    // Check if user input partially matches any topics in the knowledge base
    for (const topic in knowledgeBase) {
        if (topic.toLowerCase().includes(userInput)) { // Convert both to lowercase to ensure case-insensitive matching
            response = knowledgeBase[topic];
            break;
        }
    }

    // Display the conversation with HTML for links
    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    document.getElementById("user-input").value = ""; // Clear the input
}
