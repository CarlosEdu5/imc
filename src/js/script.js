function CalcularIMC() {
  var peso = document.getElementById("peso").value.replace(",", ".");
  var altura = document.getElementById("altura").value.replace(",", ".");

  peso = parseFloat(peso);
  altura = parseFloat(altura);

  altura = altura / 100;

  var imc = peso / (altura * altura);

  var imcMin = 10;
  var imcMax = 45;

  var porcentagem = (imc - imcMin) / (imcMax - imcMin);

  porcentagem = Math.max(0, Math.min(1, porcentagem));

  var arcoTotal = 414.7;
  var offset = arcoTotal - arcoTotal * porcentagem;

  document
    .getElementById("arco-progresso")
    .setAttribute("stroke-dashoffset", offset);

  let cor = "#22c55e";

  if (imc < 18.5) {
    cor = "#3b82f6";
  } else if (imc < 25) {
    cor = "#22c55e";
  } else if (imc < 30) {
    cor = "#eab308";
  } else if (imc < 35) {
    cor = "#f97316";
  } else {
    cor = "#ef4444";
  }

  document.getElementById("arco-progresso").setAttribute("stroke", cor);

  var classificacao = "";

  if (imc < 16) {
    classificacao = "Baixo peso muito grave";
  } else if (imc >= 16 && imc <= 16.99) {
    classificacao = "Baixo peso grave";
  } else if (imc >= 17 && imc <= 18.49) {
    classificacao = "Baixo peso";
  } else if (imc >= 18.5 && imc <= 24.99) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc <= 29.99) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.99) {
    classificacao = "Obesidade grau I";
  } else if (imc >= 35 && imc <= 39.99) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }

  function animarNumero(valorFinal) {
    const elemento = document.getElementById("resultado1");

    let atual = 0;

    const duracao = 1000;

    const fps = 60;

    const incremento = valorFinal / (duracao / (1000 / fps));

    const intervalo = setInterval(() => {
      atual += incremento;

      if (atual >= valorFinal) {
        atual = valorFinal;

        clearInterval(intervalo);
      }

      elemento.innerHTML = atual.toFixed(2);
    }, 1000 / fps);
  }

  animarNumero(imc);
}

document.getElementById("calcular").addEventListener("click", CalcularIMC);
