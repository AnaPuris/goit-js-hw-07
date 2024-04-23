'use strict';

const categEl = document.querySelector(`ul#categories`);
const categIt = categEl.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categIt.length}`);

categIt.forEach((category) => {
    const categTitle = category.querySelector(`h2`).textContent;
    const categItQuantity = category.querySelectorAll(`li`).length;
    console.log(`Category: ${categTitle}`);
    console.log(`Elements: ${categItQuantity}`);
});
