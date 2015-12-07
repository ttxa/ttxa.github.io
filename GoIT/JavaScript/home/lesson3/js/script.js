






var element = document.createElement('div');
element.classList.add('wrapper');
element.innerHTML = 'im  ';

var body = document.querySelector('body');
body.appendChild(element);

var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode('Вариант ответа №1'));

body.appendChild(checkbox);
body.appendChild(label);

