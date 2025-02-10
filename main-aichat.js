

let awaitingTaskResponse = false;

function getRandomResponse(personality, category, type) {
    const options = responses[personality]?.[category]?.[type];
    return options ? options[Math.floor(Math.random() * options.length)] : "Hmm, not sure how to respond.";
}


function triggerChat() {
    const chatBox = document.getElementById('chat');
    const personality = document.getElementById('personality').value;
    
    // Fix: Directly access 'ask' category without a third parameter
    const options = responses[personality]?.['ask'];
    const aiAsk = options ? options[Math.floor(Math.random() * options.length)] : "Hmm, not sure how to respond.";

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 🔹 Append AI Message with Avatar
    chatBox.innerHTML += `
    <div class="message ai-message" style="animation: fadeIn 0.0s ease-in-out forwards; transform: translateY(10px);">
        <img class="avatar" src="${responses[personality].avatar}" alt="AI">
        <div>
            <strong>${formatPersonality(personality)}</strong>
            <p>${aiAsk}</p>
            <span class="message-timestamp">${timestamp}</span>
        </div>
    </div>`;

    chatBox.scrollTop = chatBox.scrollHeight;

    currentAudio = new Audio("https://cdn.freesound.org/previews/366/366102_6687700-lq.mp3");
    currentAudio.play();

}

let taskCount = 0; // Track the number of completed tasks

async function handleInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const chatBox = document.getElementById('chat');
    const response = input.value.trim().toLowerCase();
    input.value = '';

    if (!response) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 🔹 Append User Message with Avatar
    chatBox.innerHTML += `
        <div class="message messageUS user-message" style="animation: fadeIn 0.0s ease-in-out forwards; transform: translateY(10px);">
            <img class="avatar" src="Images/useravatar.png" alt="User">
            <div style="
                    line-height: 5px;
                    margin-top: 8px;
                ">
                <strong>You</strong>
                <p>${response}</p>
                <span class="message-timestamp">${timestamp}</span>
            </div>
        </div>`;

    chatBox.scrollTop = chatBox.scrollHeight;

    const personality = document.getElementById('personality').value;
    let aiResponse = "";

    if (response === "yes") {
        aiResponse = getRandomResponse(personality, 'yes', 
            Math.random() < 0.33 ? 'encouragement' : 
            Math.random() < 0.66 ? 'criticism' : 
            'general'
        );
        logTaskCompletion(aiResponse);

        currentAudio = new Audio("https://cdn.freesound.org/previews/456/456965_6456158-lq.mp3");
        currentAudio.play();
    } else if (response === "no") {
        aiResponse = getRandomResponse(personality, 'no', 
            Math.random() < 0.33 ? 'encouragement' : 
            Math.random() < 0.66 ? 'criticism' : 
            'general'
        );
    } else {
        aiResponse = "I didn't quite get that. Just say 'yes' or 'no'!";
    }

    // 🔹 Append AI Message with a Delay (Simulates Typing)
    setTimeout(() => {
        chatBox.innerHTML += `
            <div class="message ai-message" style="animation: fadeIn 0.3s ease-in-out forwards; transform: translateY(10px);">
                <img class="avatar" src="${responses[personality].avatar}" alt="AI">
                <div>
                    <strong>${formatPersonality(personality)}</strong>
                    <p>${aiResponse}</p>
                    <span class="message-timestamp">${timestamp}</span>
                </div>
            </div>`;

        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message

        currentAudio = new Audio("https://cdn.freesound.org/previews/366/366102_6687700-lq.mp3");
        currentAudio.play();
    }, 1100);
}

// 🔹 Function to Format Personality Name (Slack-like)
function formatPersonality(personality) {
    return personality.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase());
}