const maiorNumero = (x, y) => {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return x === y;
  }
};
console.log(maiorNumero(10, 2));
console.log(maiorNumero(-2, 2));
console.log(maiorNumero(10, 10));
