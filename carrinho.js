let produtos = ["Exoesqueleto Robótico para Reabilitação Fisioterapêutica", "Aparelho de Estimulação Elétrica Funcional (FES)", "Dispositivo de Terapia Laser 880mw ", "Ressonância Magnética", "Etiquetas RFID para equipamentos", "Aparelho de Luz intensa Pulsada"];
let precos = [170000911, 8911, 5300, 104911, 411, 27920.50];
let quantidades = [0, 0, 0, 0, 0, 0];

function adicionarProduto(produto, quantidade) {
  let index = produtos.indexOf(produto);
  quantidades[index] += quantidade;
}

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += precos[i] * quantidades[i];
  }
  return total;
}