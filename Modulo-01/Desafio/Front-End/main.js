let employees = [];
let roles = [];
let cargosSelecionados = [];
let funcionariosFiltrados = [];

const criterioOrdenacao = [
  'Nome (ascendente)',
  'Nome (descendente)',
  'Salário (ascendente)',
  'Salário (descendente)',
];

const divMain = document.getElementById('divMain');
const componenteOrdenacao = document.getElementById('criterioOrdenacao');
const componenteTabela = document.getElementById('dadosTabela');
const componenteGroupBoxRoles = document.getElementById(
  'componenteGroupBoxRoles'
);

async function init() {
  [employees, roles] = await Promise.all([listEmployees(), listRoles()]);

  preencheCriteioBusca();
  preencheListaRoles();
  funcionariosFiltrados = employees;
  preencheTabela();

  componenteOrdenacao.addEventListener('change', eventoComponenteOrdenacao);
}

init();

function obterCargos(evento) {
  const cargo = evento.target;

  if (cargosSelecionados.indexOf(cargo.value) > -1 && cargo.checked == false) {
    const indice = cargosSelecionados.indexOf(cargo.value);

    cargosSelecionados.splice(indice, 1);
  } else {
    cargosSelecionados.push(cargo.value);
  }

  aplicarFiltroConformeCargosSelecionados();
}

function aplicarFiltroConformeCargosSelecionados() {
  funcionariosFiltrados = employees;

  if (cargosSelecionados.length > 0) {
    funcionariosFiltrados = funcionariosFiltrados.filter((funcionario) =>
      cargosSelecionados.includes(funcionario.role_id.toString())
    );
    eventoComponenteOrdenacao();
  } else {
    eventoComponenteOrdenacao();
  }
}

function eventoComponenteOrdenacao() {
  ordena();

  preencheTabela();
}

function ordena() {
  const ordenacao = componenteOrdenacao.value;

  if (ordenacao == 0) {
    funcionariosFiltrados.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  } else if (ordenacao == 1) {
    funcionariosFiltrados.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
  } else if (ordenacao == 2) {
    funcionariosFiltrados.sort(function (a, b) {
      return a.salary - b.salary;
    });
  } else {
    funcionariosFiltrados.sort(function (a, b) {
      return b.salary - a.salary;
    });
  }
}

function preencheCriteioBusca() {
  let identificadorCriterio = 0;

  for (const criterio of criterioOrdenacao) {
    const option = document.createElement('option');

    option.textContent = criterio;
    option.value = identificadorCriterio;

    componenteOrdenacao.appendChild(option);

    identificadorCriterio++;
  }
}

async function preencheListaRoles() {
  for (const role of roles) {
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const div = document.createElement('div');

    div.id = 'divCheckBox';
    checkBox.type = 'checkbox';
    checkBox.value = role.id;
    checkBox.name = 'role';

    checkBox.addEventListener('click', obterCargos);

    label.textContent = role.name;
    label.for = checkBox.name;

    div.appendChild(checkBox);
    div.appendChild(label);
    componenteGroupBoxRoles.appendChild(div);
  }
}

async function preencheTabela() {
  componenteTabela.innerHTML = '';

  ordena();

  for (const employe of funcionariosFiltrados) {
    const linha = document.createElement('tr');
    const conteudoLinhaId = document.createElement('td');
    const conteudoLinhaName = document.createElement('td');
    const conteudoLinhaRole = document.createElement('td');
    const conteudoLinhaSalary = document.createElement('td');

    let role = roles.find((x) => x.id === employe.role_id);

    conteudoLinhaId.textContent = employe.id;
    conteudoLinhaName.textContent = employe.name;
    conteudoLinhaRole.textContent = role.name;
    conteudoLinhaSalary.textContent = employe.salary;

    linha.appendChild(conteudoLinhaId);
    linha.appendChild(conteudoLinhaName);
    linha.appendChild(conteudoLinhaRole);
    linha.appendChild(conteudoLinhaSalary);

    componenteTabela.appendChild(linha);
  }
}
