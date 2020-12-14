import './main.css';

const div = document.createElement('div');

div.setAttribute('id', 'app');
div.setAttribute('class', 'app');
div.innerText = 'Hello World';

document.body.append(div);
