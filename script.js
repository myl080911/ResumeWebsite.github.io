// Adding a small interactive feature: A greeting message that changes based on time of day.
window.onload = function() {
    const greetingElement = document.createElement('p');
    const hours = new Date().getHours();
    
    let greetingMessage = '';
    if (hours < 12) {
        greetingMessage = 'Good morning! Have a great day ahead!';
    } else if (hours < 18) {
        greetingMessage = 'Good afternoon! Keep going!';
    } else {
        greetingMessage = 'Good evening! Relax and unwind.';
    }

    greetingElement.textContent = greetingMessage;
    document.querySelector('header').appendChild(greetingElement);
};
