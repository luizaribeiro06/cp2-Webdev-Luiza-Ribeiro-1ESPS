function Primo(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

function contarPrimos(x, y) {
    let contar = 0;
    for (let i = x; i <= y; i++) {
        if (isPrimo(i)) {
            contar++;
        }
    }
    console.log(Existem ${contar} números primos entre ${x} e ${y}.);
}

function calcMoedas(valor) {
    const moedas = [100, 50, 10, 5, 1];
    let qtdMoedas = {};

    for (let moeda of moedas) {
        qtdMoedas[moeda] = Math.floor(valor / moeda);
        valor %= moeda;
    }

    console.log(${qtdMoedas[100]} moeda(s) de M$ 100);
    console.log(${qtdMoedas[50]} moeda(s) de M$ 50);
    console.log(${qtdMoedas[10]} moeda(s) de M$ 10);
    console.log(${qtdMoedas[5]} moeda(s) de M$ 5);
    console.log(${qtdMoedas[1]} moeda(s) de M$ 1);
}

function fibonacci(n) {
    let a = 1, b = 1;
    let seq = [a, b];

    for (let i = 2; i < n; i++) {
        let proximo = a + b;
        seq.push(proximo);
        a = b;
        b = proximo;
    }

    console.log(Os ${n} primeiros termos da sequência de Fibonacci são: ${sequencia.join(", ")});
}

console.log(Primo(5)); 
console.log(Primo(8)); 

contarPrimos(8, 18); 

calcularMoedas(410); 

fibonacci(9); 