import { chat } from "./main.js";

const log = console.log;

const messages = [];

async function sendChatMessage(msg) {
    messages.push({ role: 'user', content: msg });
    const response = await chat(messages);
    messages.push(response);

    log(response.message);

}

// sendChatMessage('what is 2+2, give answer with a key named answer');

// sendChatMessage('what is 2+3')

// sendChatMessage('who are prime minister of india')

// sendChatMessage('why is sky blue')

// sendChatMessage('i want to buy a internet')

// sendChatMessage('i want to buy a new internet')

// sendChatMessage('i am james')

// sendChatMessage('i live in london')

// sendChatMessage('flat b13, new street')

// sendChatMessage('e1 2aa')

sendChatMessage('tell me about BT')

sendChatMessage('Do BT sell anything else then broadband')

 


