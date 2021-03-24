const firstAdden = document.getElementById('first-add');
const secondAdden = document.getElementById('second-add');
const add = document.getElementById('equal-add');
const sum = document.getElementById('sum');

const firstSub = document.getElementById('first-sub');
const secondSub = document.getElementById('second-sub');
const minus = document.getElementById('equal-minus');
const difference = document.getElementById('difference');

const firstMult = document.getElementById('first-mult');
const secondMult = document.getElementById('second-mult');
const multiply = document.getElementById('equal-product');
const product = document.getElementById('product');

const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const divide = document.getElementById('equal-divide');
const quotient = document.getElementById('quotient');

add.addEventListener('click', () => {
    sum.textContent = Number(firstAdden.value) + Number(secondAdden.value);
});

minus.addEventListener('click', () => {
    difference.textContent = Number(firstSub.value) - Number(secondSub.value);
});

multiply.addEventListener('click', () => {
    product.textContent = Number(firstMult.value) * Number(secondMult.value);
});

divide.addEventListener('click', () => {
    quotient.textContent = Number(firstDiv.value) / Number(secondDiv.value);
});