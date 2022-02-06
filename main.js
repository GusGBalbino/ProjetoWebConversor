function Converter() {  //Conversão para Dólar
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorDolarNum = parseFloat(valor);

    let valorRealNum = valorDolarNum * 0.19;
    console.log(valorRealNum);

    let valorConvert = document.getElementById("valorConvertido");
    let resultadoEmReal = "O valor Dólar é R$ " + valorRealNum;
    valorConvert.innerHTML = resultadoEmReal;
}

function Converter2() { //Conversão para ETH
    let valorElemento = document.getElementById("valor")
    let valor = valorElemento.value;
    let valorEthNum = parseFloat(valor);

    let valorRealNum = valorEthNum * 0.000063;
    console.log(valorRealNum)

    let valorConvert = document.getElementById("valorConvertido");
    let resultadoEmReal = "O valor em ETH é " + valorRealNum;
    valorConvert.innerHTML = resultadoEmReal;
}

function Converter3() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorBitNum = parseFloat(valor);

    let valorRealNum = valorBitNum * 0.0000045;
    console.log(valorRealNum)

    let valorConvert = document.getElementById("valorConvertido");
    let resultadoEmReal = "O valor em Bitcoin é ₿ " + valorRealNum;
    valorConvert.innerHTML = resultadoEmReal;
}