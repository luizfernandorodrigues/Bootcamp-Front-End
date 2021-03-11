var inputValor = document.getElementById('inputValor');
var inputPrazo = document.getElementById('inputPrazo');
var inputJurosAoAno = document.getElementById('inputJurosAoAno');
var inputPrazoMeses = document.getElementById('inputPrazoMeses');
var inputJurosAoMes = document.getElementById('inputJurosAoMes');
var inputJurosAcumulado = document.getElementById('inputJurosAcumulado');
var divTabela = document.getElementById('divTabela');
var tabelaDinamica = document.getElementById('tabelaDinamica');

function simulaFinanciamento() {
  let totalMeses = inputPrazo.valueAsNumber * 12;
  let jurosMes = Math.pow(1 + inputJurosAoAno.valueAsNumber, 1 / 12) - 1;

  inputPrazoMeses.value = !isNaN(totalMeses) ? totalMeses.toString() : '';
  inputJurosAoMes.value = jurosMes.toFixed(15);

  let amortizacao = inputValor.valueAsNumber / totalMeses;
  let valorTotal = inputValor.valueAsNumber;

  let jurosAcumulado = 0;

  let tabela = `<thead>
  <tr>
    <th>Prestações</th>
    <th>Amortização</th>
    <th>Juros</th>
    <th>Total</th>
  </tr>
</thead>`;

  let conteudoTabela;

  for (var i = 1; i <= totalMeses; i++) {
    let juros = valorTotal * jurosMes.toFixed(15);
    let total = (amortizacao + juros).toFixed(2);
    valorTotal -= amortizacao;

    jurosAcumulado += juros;

    //monta a table dinamicamente
    conteudoTabela += `
      <tr>
        <td>${i}</td>
        <td>R$ ${amortizacao.toFixed(2)}</td>
        <td>R$ ${juros.toFixed(2)}</td>
        <td>R$ ${total}</td>
      </tr>
    `;
  }

  tabelaDinamica.innerHTML = tabela + '<tbody>' + conteudoTabela + '</tbody>';

  inputJurosAcumulado.value = jurosAcumulado.toFixed(2);
}
