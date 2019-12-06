let greetingMessage = 'Good Morning';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

// changeGreetingMessage('Good Evening');
greetingMessage = 'sup'
greetPeople(); // logs 'Good Evening'