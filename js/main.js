
let list, elements;

function beforeAction() {
    list = document.querySelector('#list');
    elements = document.querySelectorAll('.list-item');
}

function first () {
   beforeAction();

   elements.forEach((elem, i) => {
       if (i === 0 ) {
           elements[i].style.color = 'red';
       } else {
           elements[i].style.color = 'blue';
       }
   });
}
function last () {
    beforeAction();

    elements.forEach((elem, i) => {
        if (i === elements.length - 1 ) {
            elements[i].style.color = 'red';
        } else {
            elements[i].style.color = 'blue';
        }
    });
}

function addStart() {
    beforeAction();

    const newItem = document.createElement('li');
    newItem.classList.add('list-item');
    newItem.textContent = 'Point-n';
    list.insertAdjacentElement('afterbegin', newItem);
}
function deleteElem() {
    beforeAction();

    list.removeChild(elements[0]);
}

function prevElem() {
    beforeAction();

    let index = 0;

    elements.forEach((elem, i) => {
        if (elem.style.color === 'red') {
            index = i;
        }
    });

    switch (index) {
        case 0: {
            elements[elements.length - 1].style.color = 'red';
            elements[0].style.color = 'blue';
            break;
        }
        default: {
            elements[index].style.color = 'blue';
            elements[index-1].style.color = 'red';
        }
    }
}

function nextElem() {
    beforeAction();

    let index = -1;

    elements.forEach((elem, i) => {
        if (elem.style.color === 'red') {
            index = i;
        }
    });

    if (index === -1 ){
        elements[0].style.color = 'red';
    } else  if ( index === elements.length - 1) {
        elements[index].style.color = 'blue';
        elements[0].style.color = 'red';
    } else {
        elements[index].style.color = 'blue';
        elements[index + 1].style.color = 'red';
    }
}

function addElem() {
    beforeAction();

    let index = -1;

    elements.forEach((elem, i) => {
        if (elem.style.color === 'red') {
            index = i;
        }
    });

    if (index === -1 ) {
        addStart();
        return;
    }

    const newItem = document.createElement('li');
    newItem.classList.add('list-item');
    newItem.textContent = 'Point-n';

    elements[index].after(newItem);
}
