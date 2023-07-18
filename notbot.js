let chatbotMsgList = [
    "Hi! Are you here to apply for the Internship? YES/NO",
    "Please enter your Name",
    "Please enter your email ID?",
    "Please select how many years of experience you have with Python/JS/Automation Development from the below list\n1 year\n2 year\n3 year\n4 year\n5 year",
    "Thanks for connecting. We will get back to you shortly."
];

let chatContainerE1;
let userInputE1;
let chatbotState = 0;

document.addEventListener("DOMContentLoaded", function() {
    chatContainerE1 = document.getElementById("chatContainer");
    userInputE1 = document.getElementById("userInput");
});

function sendMsgToChatbot() {
    let userMsg = userInputE1.value.trim().toLowerCase();
    let msgContainerE1 = document.createElement("div");
    msgContainerE1.classList.add("msg-to-chatbot-container");
    chatContainerE1.appendChild(msgContainerE1);

    let userMsgE1 = document.createElement("span");
    userMsgE1.textContent = userMsg;
    userMsgE1.classList.add("msg-to-chatbot");
    msgContainerE1.appendChild(userMsgE1);

    userInputE1.value = "";

    // Handle different scenarios based on chatbot state
    switch (chatbotState) {
        case 0:
            if (userMsg === "yes") {
                getReplyFromChatbot(1); // Ask for name
                chatbotState = 1;
            } else if (userMsg === "no") {
                getReplyFromChatbot(4); // Farewell message
                chatbotState = 4;
            } else {
                getReplyFromChatbot(0); // Repeat the first question
            }
            break;
        case 1:
            getReplyFromChatbot(2); // Ask for email ID
            chatbotState = 2;
            break;
        case 2:
            getReplyFromChatbot(3); // Ask for years of experience
            chatbotState = 3;
            break;
        default:
            getReplyFromChatbot(4); // Farewell message
            chatbotState = 4;
            break;
    }
}

function getReplyFromChatbot(msgIndex) {
    let chatbotMsg = chatbotMsgList[msgIndex];
    let msgContainerE1 = document.createElement("div");
    msgContainerE1.classList.add("msg-from-chatbot-container");
    chatContainerE1.appendChild(msgContainerE1);

    let chatbotMsgE1 = document.createElement("span");
    chatbotMsgE1.textContent = chatbotMsg;
    chatbotMsgE1.classList.add("msg-from-chatbot");
    msgContainerE1.appendChild(chatbotMsgE1);
}