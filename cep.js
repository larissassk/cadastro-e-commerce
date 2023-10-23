'use restrict'; 
//Modo restrito

//Limpar formulário
const LimparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
}
//Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
//preenche campos do formulario
const preencheFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;

}
/*função para consumo de API utilizando a função do tipo assimcrona*/
const pesquisarcep = async() =>{
    LimparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();
        if(addres.hasOwnProperty('erro')){
            alert('cep não encontrado');
    }else{
        preencheFormulario(addres);
    }
}else{
    alert('cep incorreto');
    }
}
// Adiciona um evento DOM, no input CEP
document.getElementById('cep').addEventListener('focusout', pesquisarcep);





// codigo do bootstrap
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  