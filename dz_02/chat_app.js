const EventEmitter = require('events');

const chat = new EventEmitter();
chat.on('message', (user, message) => {
    console.log(`${user}: ${message}`);
});

function sendMessage(user, message, chatEmitter) {
    chatEmitter.emit('message', user, message);
}

sendMessage('Alice', 'Hello, everyone!', chat);
sendMessage('Bob', 'Hi Alice!', chat);  
sendMessage('Charlie', 'Good morning!', chat);  
sendMessage('Alice', 'How is everyone doing?', chat);
sendMessage('Bob', 'Doing great, thanks!', chat);