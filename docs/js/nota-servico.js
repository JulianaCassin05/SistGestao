
let inputCnpj = document.getElementById("inputCnpj")
let inputCelular = document.getElementById("inputCelular")

















document.addEventListener("DOMContentLoaded", function () {
    const pecasList = document.getElementById("pecas-list");
    const adicionarPecaButton = document.getElementById("adicionar-peca");

    adicionarPecaButton.addEventListener("click", function () {
        const novaPeca = document.createElement("div");
        novaPeca.innerHTML = `<div class="row g-3 needs-validation d-flex align-items-end mt-1" id="formulario">
        <div class="col-md-3">
            
            <div class="input-group">
                <select class="form-select border border-1 border-black" id="selectEstado" required>
                    <option selected disabled></option>
                    <option value="maria">Maria</option>
                    <option value="joao">João</option>
                    <option value="matheus">Matheus</option>
                    <option value="amanda">Amanda</option>
                </select>
            </div>
        </div>
        <div class="col-md-1">         
            <input type="number" class="form-control border border-1 border-black" id="datepickerHour" required>
        </div>

        <div class="col-md-1" style="cursor: pointer;">
            <i class="fa-solid fa-trash-can fa-xl p-3" id="icone" onclick="excluirPeca(this)"></i>
        </div>
        
    </div>`;
        pecasList.appendChild(novaPeca);
    });
});



function excluirPeca(element){
    let linha = element.parentNode.parentNode; 
    linha.parentNode.removeChild(linha); 
}















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
        theme:"light",
        allowInput: true
    });
  });
  

  $(document).ready(function() {
    $("#datepickerHour").flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        minTime: "16:00",
        maxTime: "22:30",
        defaultDate: "13:00"
    });
  });
  