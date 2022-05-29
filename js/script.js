'use strict';

let generateList = function generateList (arr) {
    let ul = document.createElement('ul');

    arr.forEach(function (elem){
        let li = document.createElement('li');
        let childElement;

        if (Array.isArray(elem)) {
            childElement = generateList(elem);
        }else {
            childElement = document.createTextNode(elem)
        }

        li.appendChild(childElement);
        ul.appendChild(li);
    })

    return ul;
}

document.body.appendChild(generateList([1, 2, 3]))
document.body.appendChild(generateList([1, 2,[1.1, 1.2,[1.3, 1.4], 1.5], 4]))