let employees = [];
let roles = [];

const criterioOrdenacao = [
  'Nome (ascendente)',
  'Nome (descendente)',
  'Salário (ascendente)',
  'Salário (descendente)',
];

const divMain = document.getElementById('divMain');
const componenteOrdenacao = document.getElementById('criterioOrdenacao');
const componenteTabela = document.getElementById('componenteTabela');
const componenteGroupBoxRoles = document.getElementById(
  'componenteGroupBoxRoles'
);

async function init() {
  [employees, roles] = await Promise.all([listEmployees(), listRoles()]);

  preencheCriteioBusca();
  preencheListaRoles();
  preencheTabela(employees);
}

init();

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

    checkBox.type = 'checkbox';
    checkBox.value = role.id;
    checkBox.name = 'role';

    label.textContent = role.name;
    label.for = checkBox.name;

    componenteGroupBoxRoles.appendChild(checkBox);
    componenteGroupBoxRoles.appendChild(label);
  }
}

async function preencheTabela(employeesfilter) {
  for (const employe of employeesfilter) {
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
