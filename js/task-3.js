'use strict';

function getElementWidth(content, padding, border) {
    let contentValue = parseFloat(content);
    let paddingValue = parseFloat(padding);
    let borderValue = parseFloat(border);

    let elementWidth = contentValue + (paddingValue * 2) + (borderValue * 2);

    return elementWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));