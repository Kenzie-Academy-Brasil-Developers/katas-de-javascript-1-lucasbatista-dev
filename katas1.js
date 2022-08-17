function oneThroughTwenty() {
  let meuRetorno = [];

  for (let counter = 1; counter <= 20; counter++) {
    meuRetorno.push(counter);
  }

  return meuRetorno;
}
console.log(oneThroughTwenty());

function evensToTwenty() {
  let numerosPares = [];
  for (let i = 1; i <= 20; i++) {
    let numeroAtual = i;
    if (numeroAtual % 2 == 0) {
      numerosPares.push(numeroAtual);
    }
  }
  return numerosPares;
}
console.log(evensToTwenty());

function oddsToTwenty() {
  let numerosImpares = [];
  for (let i = 1; i <= 20; i++) {
    let numeroAtual = i;
    if (numeroAtual % 2 !== 0) {
      numerosImpares.push(numeroAtual);
    }
  }
  return numerosImpares;
}
console.log(oddsToTwenty());

function multiplesOfFive() {
  let numerosMultiplos5 = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      numerosMultiplos5.push(i);
    }
  }
  return numerosMultiplos5;
}
console.log(multiplesOfFive());

function squareNumbers() {
  let quadradoPerfeito = [];
  for (let i = 1; i <= 10; i++) {
    let vQuadrado = i;
    let resultado = vQuadrado * vQuadrado;
    quadradoPerfeito.push(resultado);
  }
  return quadradoPerfeito;
}
console.log(squareNumbers());

function countingBackwards() {
  let meuRetorno = [];

  for (let counter = 20; counter >= 1; counter--) {
    meuRetorno.push(counter);
  }

  return meuRetorno;
}
console.log(countingBackwards());

function evenNumbersBackwards() {
  let numerosPares = [];
  for (let i = 20; i >= 1; i--) {
    let numeroAtual = i;
    if (numeroAtual % 2 == 0) {
      numerosPares.push(numeroAtual);
    }
  }
  return numerosPares;
}

console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
  let numerosImpares = [];
  for (let i = 20; i >= 1; i--) {
    let numeroAtual = i;
    if (numeroAtual % 2 !== 0) {
      numerosImpares.push(numeroAtual);
    }
  }
  return numerosImpares;
}
console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
  let numerosMultiplos5 = [];

  for (let i = 100; i >= 0; i--) {
    if (i % 5 == 0) {
      numerosMultiplos5.push(i);
    }
  }
  return numerosMultiplos5;
}
console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
  let quadradoPerfeito = [];
  for (let i = 10; i >= 1; i--) {
    let vQuadrado = i;
    let resultado = vQuadrado * vQuadrado;
    quadradoPerfeito.push(resultado);
  }
  return quadradoPerfeito;
}
console.log(squareNumbersBackwards());
