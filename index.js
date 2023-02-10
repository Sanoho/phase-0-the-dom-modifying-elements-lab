main.removeAttribute('id');

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory')

newHeader.textContent = "JavaScript is the champion";

document.body.append(newHeader);
