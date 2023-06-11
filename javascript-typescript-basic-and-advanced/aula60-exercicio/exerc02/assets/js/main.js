const ePaisagem = (inWith, inHeight) => {
  if (inWith > inHeight) {
    return true;
  }
  return false;
};
console.log(ePaisagem(20, 10));
console.log(ePaisagem(10, 20));