var numeros = [1, 2, 7];

console.log(numeros);

numeros.push(5);

console.log(numeros);

numeros.push(8);

console.log(numeros);

numeros.pop();

console.log(numeros);

numeros.splice(1, 1);

console.log(numeros);

numeros.forEach(function (item) {
      // console.log("ola", item);
});

numeros = numeros.map(function (item) {
      return item + 1;
});

console.log(numeros);

numeros = numeros.reduce(function (total, item) {
      return total + item;
}, 0);

console.log(numeros);

Math.ceil(4.3);
