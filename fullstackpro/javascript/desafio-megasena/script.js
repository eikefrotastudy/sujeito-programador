function gerarNumeros(qtdNumeros){
    if (qtdNumeros < 6 || qtdNumeros > 9){
        console.log("Não é possivel usar esse número")
        return []
    } 
    
    const listaNumeros = []

    while (listaNumeros.length < qtdNumeros) {
        const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
        if (!listaNumeros.includes(numeroAleatorio)) { 
            listaNumeros.push(numeroAleatorio);
        }
        
    }
    
    return listaNumeros;
}

const quantidade = prompt("Digite um número de 6 a 9: ")

console.log(gerarNumeros(quantidade))