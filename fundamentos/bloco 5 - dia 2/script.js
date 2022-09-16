// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

// 1 - Onde eu quero adicionar esse elemento?
// Esse elemento existe no meu JS?

const container = document.getElementById('first');
// console.log(container);

// 2 - Como criar (5.2) um elemento HTML?
const newDiv = document.createElement('div');
// console.log(newDiv);

// 3 - Como adicionar classes a esse elemento?

newDiv.className = 'red circle small';
// newDiv.classList.add('teste', 'teste2'); toggle
// console.log(newDiv);

// 4 - Como adicionar o elemento ao arquivo HTML?

container.appendChild(newDiv);


// const newDiv2 = document.createElement('div');
// newDiv2.className = 'yellow square medium';
// container.appendChild(newDiv2);
// console.log(newDiv2);

function createDivElement(classes) {
  const newDiv = document.createElement('div');
  newDiv.className = classes;
  // container.appendChild(newDiv);
  // console.log(newDiv);
  return newDiv;
}

// console.log('caique');

function addElement(parent, child) {
  parent.appendChild(child);
}

// createDivElement('yellow square medium');
// createDivElement('red square medium');
// addElement(container,createDivElement('yellow square medium'));
// addElement(container,createDivElement('red square small'));
