const url = 'https://viacep.com.br/ws/'
const btnBuscar = document.getElementById("btnBuscar")
const containerResultado = document.getElementById("containerResultado")
const formulario = document.getElementById("formulario")
const token = 'dc2e0518826f00696c54f2b29da503d6'

let inputCnpj = document.getElementById("inputCnpj")
let inputCelular = document.getElementById("inputCelular")
let inputCep = document.getElementById("inputCep")
let inputLogradouro = document.getElementById("inputLogradouro")
let inputCidade = document.getElementById("inputCidade")
let inputBairro = document.getElementById("inputBairro")
let selectEstado = document.getElementById("selectEstado")
let inputNumero = document.getElementById("inputNumero")


function clickEnter(event) {
  if (event.key === "Enter") {
    carregarEndereço()
  }
}

inputCep.addEventListener("keydown", clickEnter);

formulario.addEventListener('submit', submit)

async function buscar() {
  let cep = document.getElementById("inputCep").value
  const response = await fetch(url+cep+'/json',  
  ).then(r => r.json())
  const data = await response
  return data
}



async function submit(event) {
  event.preventDefault();
  await buscar()
}

async function carregarEndereço() {
  buscar().then(data => {
    inputLogradouro.value = data.logradouro
    inputBairro.value = data.bairro
    inputCidade.value = data.localidade
    selectEstado.value = data.uf
  })
}


// JQUERY

$(document).ready(function () {
  $(inputCep).inputmask('99999-999');
});

$(document).ready(function () {
    $(inputCnpj).inputmask('99.999.999/0001-99');
});

$(document).ready(function () {
    $(inputCelular).inputmask('(99)99999-9999');
});


$(document).ready(function() {
    $("#datepicker").flatpickr({
        dateFormat: "d/m/Y",  
        maxDate: "today",
        theme:"dark",
        allowInput: true
    });
  });
  