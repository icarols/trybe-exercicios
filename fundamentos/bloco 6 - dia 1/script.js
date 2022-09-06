const button = document.getElementsByClassName('btn');
const clearButton = getElementById('clear');
const name = document.getElementById('full-name');
const email = document.getElementById('email');
const answer = document.getElementById('answer');
const date = document.getElementById('date')
const agree = document.getElementsByClassName('agree');


function preventButton(event) {
    event.preventDefault();
}

clearButton.addEventListener('click', function (e) {
    document.getElementsByClassName('form').reset();

});

button.addEventListener('click', preventButton);



