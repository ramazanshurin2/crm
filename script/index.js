'use strict';
//Lesson 2
// const headerTextElement = document.querySelector('.modal__title');
// const formElement = document.querySelector('.modal__form');
// const checkBoxElement = document.querySelector('.modal__checkbox');
// const checkBoxLabelElement = document.querySelector('.modal__input_discount');

// console.log(headerTextElement);
// console.log(formElement);
// console.log(checkBoxElement);
// console.log(checkBoxLabelElement);


//Lesson 3
const overlay = document.querySelector('.overlay');
console.log(overlay);
overlay.classList.remove('active');

var tovar = {
    id: 111,
    name: "Монитор",
    description: "Настольный монитор",
    unit: "шт",
    count: 15,
    price: 500,
    fullPrice: 5000
}

var tovars = [{
        id: 111,
        name: "Монитор",
        description: "Настольный монитор",
        unit: "шт",
        count: 15,
        price: 500,
        fullPrice: 5000
    },
    {
        id: 112,
        name: "Тостер",
        description: "Настольный тостер",
        unit: "шт",
        count: 1,
        price: 200,
        fullPrice: 2000
    }
]

const createRow = (index, tovar) => {
    const el = `<tr>
   <td class="table__cell ">${index}</td>
   <td class="table__cell table__cell_left table__cell_name" data-id="${tovar.id}">
     <span class="table__cell-id">id: ${tovar.id}</span>${tovar.name}</td>
   <td class="table__cell table__cell_left">${tovar.description}</td>
   <td class="table__cell">${tovar.unit}</td>
   <td class="table__cell">${tovar.count}</td>
   <td class="table__cell">$ ${tovar.price}</td>
   <td class="table__cell">$ ${tovar.fullPrice}</td>
   <td class="table__cell table__cell_btn-wrapper">
     <button class="table__btn table__btn_pic"></button>
     <button class="table__btn table__btn_edit"></button>
     <button class="table__btn table__btn_del"></button>
   </td>
 </tr>`

    return el;
}

const text = createRow(3, tovar);
console.log(text);
const tableBody = document.querySelector('.table__body');
tableBody.innerHTML += text;

const renderGoods = tovars => {
    for (var i = 0; i < tovars.length; i++) {
        const text = createRow(i + 4, tovars[i]);
        const tableBody = document.querySelector('.table__body');
        tableBody.innerHTML += text;
    }
}



renderGoods(tovars);

const addButton = document.querySelector('.panel__add-goods');
const overlayModal = document.querySelector('.overlay__modal');
const modalClose = document.querySelector('.modal__close');
const btnDel = document.querySelectorAll('.table__btn_del');

addButton.addEventListener('click', () => {
    overlay.classList.add('active');
});

overlay.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('overlay')) {
        overlay.classList.remove('active');
    }
});



modalClose.addEventListener('click', () => {
    overlay.classList.remove('active');
});

btnDel.forEach(e => {
    e.addEventListener('click', () => {
        const row = e.closest('tr');
        console.log(row);
        row.remove();
    })

});